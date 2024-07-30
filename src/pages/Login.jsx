import reactLogo from '../assets/react.svg'
import { Link } from 'react-router-dom';

const Login = () => {


    return (
        <div className='Login'>
            <img src={reactLogo} className="logo" alt="React logo" />
            <h1 className='Login-h1'>Login</h1>
            <form action="#" method='get'>
                <div className="Form">
                    <label for="userId">User:</label>
                    <input id="userId" type="text" name="userId" />
                    <label for="password">Nombre:</label>
                    <input id="password" type="password" name="password" />
                </div>
                <Link to="/home"><input type="submit" value="Login" /></Link>
            </form>
        </div>
    );
}

export default Login;