import reactLogo from '../assets/react.svg'
import { Link } from 'react-router-dom';
import { userIdContext } from '../Layout';
import { useState } from 'react';

const Login = () => {

    const [userComprobaciones, setUserComprobaciones, login] = useContext(userIdContext);
    const [listaUsuarios, setListaUsuarios] = useState("")
    const [nombre,setNombre] = useState("")
    const [clave, setClave] = useState("")

    useEffect(() => {
        getListaUsuarios()
    }, []);

    const getListaUsuarios = async () => {
        try {
            const result = await fetch("./backend/pelis.json");
            const objeto = await result.json();
            console.log(objeto)
            setListaUsuarios(objeto.usuarios)
        } catch (error) {
            console.log("Mi error es: ",error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserComprobaciones = listaUsuarios.find(datos => datos.nombre && datos.clave)
        if (userComprobaciones) {
            login(userComprobaciones),
            <Link to="/home"></Link>
        }   else {
            alert('Usuario o clave incorrectos');
        }
    }

    return (
        <div className='Login'>
            <img src={reactLogo} className="logo" alt="React logo" />
            <h1 className='Login-h1'>Login</h1>
            <form onSubmit={handleSubmit} action="#" method='get'>
                <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                <input type="password" placeholder="Clave" value={clave} onChange={(e) => setClave(e.target.value)} required />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;