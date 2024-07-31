import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <h1>MIS PELIS</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="addpelis">Añadir Pelis</NavLink></li>
            </ul>
        </div>
    );
}

export default Header;