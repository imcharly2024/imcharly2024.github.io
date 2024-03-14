import React from 'react';
import './seccion_c.css';
import propaganda4 from '../assets/img/cinta.jpg';

function Seccion_C(){
    return(
        <section className='seccion_c'>
            <img src={propaganda4} className="propaganda-img" alt="Propaganda"/>
        </section>
    );
}

export default Seccion_C;
