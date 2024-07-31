// Formulario de login, formularion de añandir pelis
// Catalogo (visto no visto)

import Footer from './components/Footer';
import Header from './components/Header';
import './css/App.css'
import { Outlet } from 'react-router-dom';
import { useUser } from './context/UserContext';

const Layout = () => {

  return (
      <> 
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
  )
}

export default Layout
