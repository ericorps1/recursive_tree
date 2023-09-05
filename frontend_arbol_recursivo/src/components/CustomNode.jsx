import React, { useState } from "react";
import { useDrag, useDrop } from 'react-dnd';
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ArrowRight as ArrowRightIcon, Delete } from "@mui/icons-material";
import { TypeIcon } from "../TypeIcon";
import styles from "../CustomNode.module.css";

const ItemType = {
  NODE: 'node'
};

export const CustomNode = (props) => {
  const [hover, setHover] = useState(false);
  const { droppable, data } = props.node;
  const indent = props.depth * 24;

  const handleToggle = (e) => {
    e.stopPropagation();
    props.onToggle(props.node.id);
  };

  const handleSelect = () => props.onSelect(props.node);

  // Configuración de Drag & Drop
  const [, refDrag] = useDrag({
    type: ItemType.NODE,
    item: { id: props.node.id }
  });

  const [, refDrop] = useDrop({
    accept: ItemType.NODE,
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      if (props.onDrop) {
        props.onDrop(item.id, props.node.id);
      }
    }
  });

  // Esta función combina las referencias de arrastrar y soltar
  const ref = (element) => {
    refDrag(element);
    refDrop(element);
  };

  return (
    <div
      ref={ref}
      className={`tree-node ${styles.root} ${props.isSelected ? styles.isSelected : ""}`}
      style={{ paddingInlineStart: indent }}
      onClick={handleSelect}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`${styles.expandIconWrapper} ${props.isOpen ? styles.isOpen : ""}`}
      >
        {props.node.droppable && (
          <div onClick={handleToggle}>
            <ArrowRightIcon />
          </div>
        )}
      </div>
      <div>
        <TypeIcon droppable={droppable} fileType={data?.fileType} isOpen={props.isOpen} />
      </div>
      <div className={styles.labelGridItem}>
        <Typography variant="body2">{props.node.text}</Typography>
      </div>
      {hover && (
        <div className={styles.actionButton}>
          <IconButton size="small" onClick={() => props.onDelete(props.node.id)}>
            <Delete fontSize="small" />
          </IconButton>
        </div>
      )}
    </div>
  );
};