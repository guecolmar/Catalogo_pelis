// Formulario de login, formularion de añandir pelis
// Catalogo (visto no visto)

import Footer from './components/Footer';
import Header from './components/Header';
import './css/App.css'
import { Outlet } from 'react-router-dom';


const Layout = () => {

  return (
    <>  
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
