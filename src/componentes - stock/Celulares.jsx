// Celulares.jsx
import React from 'react';
import PropTypes from 'prop-types';
import video from '../assets/img/iph.mp4'; 
import './celulares.css';
import propaganda5 from '../assets/img/disponible.jpg';

function Celulares({ id, nombre, imagen, onCompraClick }) {
    return (

        
        <div className="celular">        
        
<video autoPlay loop className="video-background">
    
                <source src={video} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
            <img src={propaganda5} className="propaganda-img" alt="Propaganda"/>
            <img className="imagen" src={imagen} alt={nombre} />

            <div className="info">
                <div className="nombre">{nombre}</div>
                <div className="id">#ID: {id}</div>
                <button className="boton" onClick={onCompraClick}>
                    Ver Detalles
                </button>
                
            </div>
            
        </div>
    );
}

Celulares.propTypes = {
    id: PropTypes.string,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string,
    precio: PropTypes.string,
    imagen: PropTypes.string.isRequired,
    onCompraClick: PropTypes.func.isRequired,
};

export default Celulares;
