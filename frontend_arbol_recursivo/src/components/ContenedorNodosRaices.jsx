import React, { useState, useEffect, useContext } from 'react';
import { MyContext } from '../context/ContextContenedorNodosRaices.jsx';

function ContenedorNodosRaices() {
    const { renderNodosRaices } = useContext(MyContext);

    return (
        <div>
            <div className="card">
                {renderNodosRaices()}
            </div>
        </div>
    );
}

export default ContenedorNodosRaices;