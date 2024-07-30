import { useEffect, useState } from "react";
import Peli from "../components/Peli";

const Home = () => {
    const [listaPeliculas, setListaPeliculas] = useState([]);

    useEffect(() => {
        getListaPelis()
    }, []);

    const getListaPelis = async () => {
        try {
            const result = await fetch("./backend/pelis.json");
            const objeto = await result.json();
            console.log(objeto)
            setListaPeliculas(objeto.peliculas)
        } catch (error) {
            console.log("Mi error es: ",error)
        }
    }

    return (
        <div className="GridPelis">
            {
            listaPeliculas.map((pelicula) => {
                <Peli key={pelicula.id} {...pelicula} />
            })
            }
        </div>
    );
}

export default Home;