// ListaCelulares.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Celulares from './Celulares';
import DetalleCelulares from './DetalleCelulares';
import imagenes from './imagenes1';
import celulares from './DatosCelulares';
import './listadocelulares.css';
import Seccion_B from '../componentes - seccion  B/seccion_b.jsx';
import Seccion_C from '../componentes - seccion C/seccion_c.jsx';
import Seccion_D from '../componentes - seccion D/seccion_d.jsx';
import Seccion_A from '../componentes - seccion  A/seccion_a';

function ListaCelulares() {
    const [celularSeleccionado, setCelularSeleccionado] = useState(null);

    const handleCompraClick = (index) => {
        setCelularSeleccionado(celulares[index]);
    };

    const handleVolverClick = () => {
        setCelularSeleccionado(null);
    };

    return (
        <div>
            <Seccion_D />
            {celularSeleccionado ? (
                <DetalleCelulares
                    celular={celularSeleccionado}
                    onVolverClick={handleVolverClick}
                />
            ) : (
                <div className="contenedor-general">
                    {celulares.map((celular, index) => (
                        <Celulares
                            key={index}
                            nombre={celular.nombre}
                            id={celular.id}
                            precio={celular.precio}
                            imagen={imagenes[celular.imagen]}
                            onCompraClick={() => handleCompraClick(index)}
                        />
                    ))}
                </div>
            )}              <>
          
            <Seccion_C />
            <Seccion_A />
            <Seccion_B />
          </>
        </div>

          

    );
}
ListaCelulares.propTypes = {
    id: PropTypes.string,
    nombre: PropTypes.string.isRequired,
    precio:PropTypes.string,
    imagen: PropTypes.string,
};


export default ListaCelulares;

