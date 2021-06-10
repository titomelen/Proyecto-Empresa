import React from 'react';
import ReproductorMusica from '../Reproductor/index';

const Usuario = ({handleLogout}) => {

    return (
        <section className="usuario">
            <nav>
                <h2>Bienvenido</h2>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </nav>
            <div className="ReproductorMusica">
                <ReproductorMusica/>
            </div>
        </section>
    )
    
}

export default Usuario;