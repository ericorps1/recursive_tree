import axios from 'axios';

const baseURL = 'http://localhost:3000/v1/api/arbol_recursivo/nodos';
const api_arbol_recursivo = axios.create({ baseURL });

// const getRaices = async () => {
//   try {
//     var config = {
//       method: 'get',
//       maxBodyLength: Infinity,
//       url: ,
    //   headers: {
    //     Authorization: `Bearer: 0x2AEc30e22F78fc9bF033FE3d58d217c3b5Bb4CE8`
    //   },
//       data: {}
//     };

//     const response = await axios(config);
//     return response.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

export default api_arbol_recursivo;