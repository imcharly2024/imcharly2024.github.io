
import Proptypes from "prop-types";
import "./boton.css";

function Boton (props){
    const estilosBoton = {
        background: props.color
    }
    return(
        <div className="contenedor-btn">
            <button className="boton" style={estilosBoton} onClick={props.onClick}> {props.texto} </button>

        </div>
         )

}

Boton.propsTypes = {
    color: Proptypes.string,
    texto: Proptypes.string.isRequired,
    onClick: Proptypes.func,
}
export default Boton;