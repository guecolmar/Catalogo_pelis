import { useEffect, useState } from "react";
import Peli from "../components/Peli";

const Home = () => {
    const [listaPeliculas, setListaPeliculas] = useState([]);

    return (
        <div className="GridPelis">
            {
            listaPeliculas.map((pelicula) => {
                return (
                    <Peli key={pelicula.id} {...pelicula} />
                )
            })
            }
        </div>
    );
}

export default Home;