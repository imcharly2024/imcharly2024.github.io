import { Link, useLocation } from "react-router-dom";
import './menu.css';

const Menu = () => {
    const location = useLocation();

    return(
        <nav className="menu">
            <ul>
                <li>
                    <Link to="/" className={location.pathname === "/" ? "active" : ""}> Inicio </Link>
                </li>
                <li>
                    <Link to="/login"> Mi Cuenta </Link>
                </li>
                <li>
                    <Link to="/registro"> Registro  </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
