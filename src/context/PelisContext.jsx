import { createContext, useState, useContext } from "react";

const PelisContext = createContext();

export const PelisContextProvider = ({children}) => {
    const [listaPelis, setListaPelis]  = useState([])

    useEffect(() => {
        getListaPelis()
    }, []);

    const getListaPelis = async () => {
        try {
            const result = await fetch("./backend/pelis.json");
            const objeto = await result.json();
            console.log(objeto)
            setListaPelis(objeto.peliculas)
        } catch (error) {
            console.log("Mi error es: ",error)
        }
    }

    return(
        <PelisContext.Provider value={{listaPelis,setListaPelis}}>
            {children}
        </PelisContext.Provider>
    )
}