import React from 'react';
import './seccion_d.css';
import propaganda5 from '../assets/img/listo.jpg';

function Seccion_D(){
    return(
        <section className='seccion_d'>
            <img src={propaganda5} className="propaganda-img" alt="Propaganda"/>
        </section>
    );
}

export default Seccion_D;
