import React from 'react';
import PropTypes from 'prop-types';
import imagenes from './imagenes1';
import './celulares.css'; 
import video from '../assets/img/iph.mp4'; 

function DetalleCelulares({ celular, onVolverClick }) {
    return (
        <div className="detalle-celular-container">
            <video autoPlay loop className="video-background">
    
    <source src={video} type="video/mp4" />
    Tu navegador no soporta el elemento de video.
</video>
            <img className="imagen2" src={imagenes[celular.imagen]} alt={celular.nombre} />
            <div className="detalle-celular-info">
                <h2>{celular.nombre}</h2>
                <h3>#CODIGO: {celular.id}</h3>
                <h3>Descripcion: </h3>
                <p>{celular.descripcion}</p>
                <h3>Colores Disponibles </h3><p>{celular.colores}</p>
                <h3>Stock </h3>
                <p>{celular.stock}</p>
                <h3>Precio: {celular.precio}</h3>
                <button onClick={onVolverClick}>Volver</button>
            </div>
        </div>
    );
}

DetalleCelulares.propTypes = {
    celular: PropTypes.shape({
        id: PropTypes.string,
        nombre: PropTypes.string.isRequired,
        descripcion: PropTypes.string,
        precio: PropTypes.string,
        imagen: PropTypes.string,
    }),
    onVolverClick: PropTypes.func.isRequired,
};

export default DetalleCelulares;
