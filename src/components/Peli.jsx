

const Peli = ({id, idUsuario, titulo, director, imagen, anio, isVista}) => {
    const usuarioId = (idUsuario=="user-25" ? "card isActive" : "card")
    return (
        <div className="card">
            <p>{id}</p>
            <img src={imagen} alt={id} />
        </div>
    );
}

export default Peli;