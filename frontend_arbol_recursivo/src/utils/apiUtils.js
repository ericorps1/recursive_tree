import api_arbol_recursivo from '../api/api.js';

export async function getRaices() {
  try { 
    const { data } = await api_arbol_recursivo.get('/get_raices/', {
      params: {},
      headers: {
        Authorization: 'Bearer 0x2AEc30e22F78fc9bF033FE3d58d217c3b5Bb4CE8'
      }
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteNodo( id_nodo ) {
  try { 
    const { data } = await api_arbol_recursivo.post('/delete_nodo/', {
      id_nodo // Directamente como propiedad del objeto
    }, {
      headers: {
        Authorization: 'Bearer 0x2AEc30e22F78fc9bF033FE3d58d217c3b5Bb4CE8' // Sin dos puntos después de "Bearer"
      }
    });
    return "";
  } catch (error) {
    console.log(error);
  }
}



export async function updatePadre( id_hijo, id_padre ) {
  try { 
    const { data } = await api_arbol_recursivo.post('/update_padre/', {
      id_hijo, id_padre // Directamente como propiedad del objeto
    }, {
      headers: {
        Authorization: 'Bearer 0x2AEc30e22F78fc9bF033FE3d58d217c3b5Bb4CE8' // Sin dos puntos después de "Bearer"
      }
    });
    return "";
  } catch (error) {
    console.log(error);
  }
}

export async function addRaiz() {
  try {
    const { data } = await api_arbol_recursivo.post('/add_nodo_raiz/', {}, {
      headers: {
        Authorization: 'Bearer 0x2AEc30e22F78fc9bF033FE3d58d217c3b5Bb4CE8'
      }
    });
    
    // Aquí puedes realizar acciones adicionales con los datos recibidos, si es necesario

    return ""; // Opcional: devuelve los datos si deseas utilizarlos en otro lugar
  } catch (error) {
    // Manejo de errores específico
    console.log('Error al agregar el nodo raíz:', error);
    throw error; // Opcional: relanza el error para que pueda ser manejado en otro lugar
  }
}