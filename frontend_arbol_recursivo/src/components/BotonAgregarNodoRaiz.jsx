import { useState, useEffect, useContext } from 'react';
import api_arbol_recursivo from '../api/api.js';
import {addRaiz} from '../utils/apiUtils.js';
import { MyContext } from '../context/ContextContenedorNodosRaices.jsx';


function BotonAgregarNodoRaiz() {
  const { obtenerNodosRaices } = useContext(MyContext);

  const handleAgregarNodoRaiz = async () => {
    // Lógica para agregar el nodo raíz utilizando la función addRaiz()
    try {
      
      await addRaiz();
      await obtenerNodosRaices();
    } catch (error) {
      console.log(error);
      // Manejo de errores
    }
  };



  return (
    <div>
      <button onClick={() => handleAgregarNodoRaiz()}>Agregar nodo raíz</button>
    </div>
  );
}

export default BotonAgregarNodoRaiz;