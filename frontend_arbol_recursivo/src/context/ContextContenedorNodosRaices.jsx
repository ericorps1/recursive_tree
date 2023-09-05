import React, { createContext, useState, useEffect } from 'react';
import { getRaices, deleteNodo, updatePadre } from '../utils/apiUtils.js';
import { DndProvider } from 'react-dnd';
import { Tree, MultiBackend, getBackendOptions } from '@minoru/react-dnd-treeview';

import { ThemeProvider, CssBaseline } from "@mui/material";
import { CustomNode } from "../components/CustomNode";
import { CustomDragPreview } from "../components/CustomDragPreview";
import styles from "../App.module.css";

import { theme } from "../theme.js";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [nodosRaices, setNodosRaices] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    obtenerNodosRaices();
  }, []);

  const handleOnDrop = async (draggedNodeId, targetNodeId) => {
    await updatePadre(draggedNodeId, targetNodeId);
    obtenerNodosRaices();  // Recargar nodos después de una actualización
  }

  const obtenerNodosRaices = async () => {
    try {
      const nodos = await getRaices();
      const treeData = convertToTreeData(nodos);
      setNodosRaices(treeData);
    } catch (error) {
      console.log(error);
    }
  };

  const convertToTreeData = (nodos) => {
    if (!Array.isArray(nodos)) {
       return [];
    }
    return nodos.map((nodo) => ({
       id: nodo.id_nodo,
       parent: nodo.id_padre || 0, 
       droppable: nodo.droppable,
       text: nodo.nombre_nodo
    }));
 };
 

  const eliminarNodoRaiz = async (id_nodo) => {
    try {
      await deleteNodo(id_nodo);
      obtenerNodosRaices();
    } catch (error) {
      console.log(error); 
    }
  };

  const renderNodosRaices = () => {
    if (nodosRaices.length > 0) {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <DndProvider backend={MultiBackend} options={getBackendOptions()}>
              <Tree
                tree={nodosRaices}
                rootId={0}
                render={(node, { depth, isOpen, onToggle }) => (
                  <>
                    <CustomNode
                      node={node}
                      depth={depth}
                      isOpen={isOpen}
                      isSelected={node.id === selectedNode?.id}
                      onToggle={onToggle}
                      onSelect={node => setSelectedNode(node)}
                      onDrop={(draggedNodeId, targetNodeId) => handleOnDrop(draggedNodeId, targetNodeId)}
                      onDelete={eliminarNodoRaiz}
                    />
                  </>
                )}
                dragPreviewRender={(monitorProps) => (
                  <CustomDragPreview monitorProps={monitorProps} />
                )}
                classes={{
                  draggingSource: styles.draggingSource,
                  dropTarget: styles.dropTarget
                }}
              />
            </DndProvider>
        </ThemeProvider>
      );
    } else {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <p>No hay nodos :/</p>
        </ThemeProvider>
      );
    }
  };

  return (
    <MyContext.Provider value={{ nodosRaices, obtenerNodosRaices, renderNodosRaices, eliminarNodoRaiz }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;