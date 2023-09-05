import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import arbolito from './assets/arbolito.png';
import './App.css'
import ContenedorNodosRaices from './components/ContenedorNodosRaices';
import BotonAgregarNodoRaiz from './components/BotonAgregarNodoRaiz';



function App() {
  
  return (
    <>
      <div >

        <a href="#" rel="noopener noreferrer">
          <img src={arbolito} className="logo" alt="Arbolito" style={{ width: '150px', height: '150px' }} />
        </a>
     
      </div>
      
      <h1>Árbol Recursivo</h1>

      <hr></hr>
      <p>Planta un arbolito :)</p>

      <br />

      <BotonAgregarNodoRaiz/>
      <ContenedorNodosRaices/>

    </>
  )
}

export default App