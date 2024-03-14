import React from 'react';
import './header.css';
import propaganda3 from '../assets/img/titulo3.jpg';

function Head() {
    return(
        <header className='header'>
            <img src={propaganda3} className="propaganda-img" alt="Propaganda"/>  
        </header>
    );
}

export default Head;
