import { Link } from "react-router-dom";

const Peli = ({id, idUsuario, titulo, director, imagen, anio, isVista}) => {
    // const usuarioId = (idUsuario=="user-25" ? "card isActive" : "card")
    return (
        <div className="card">
            <Link to='home/${id}'> <img src={imagen} alt={titulo} /></Link>
            <h3>{titulo}</h3>
            <p>{director}</p>
            <p>{anio}</p>
        </div>
    );
}

export default Peli;