import './seccion_b.css';
import propaganda2 from '../assets/img/debajo.jpg';
import propaganda3 from '../assets/img/camara.jpg';

function Seccion_B(){
    
    return(
        <section className='seccion_b'>   
            <img src={propaganda3} className="propaganda-img" alt="Propaganda"/>
            <img src={propaganda2}className="propaganda-img" alt="Propaganda"/>


        </section>



    )


}

export default Seccion_B;