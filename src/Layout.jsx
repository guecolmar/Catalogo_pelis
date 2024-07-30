// Formulario de login, formularion de añandir pelis
// Catalogo (visto no visto)

import Footer from './components/Footer';
import Header from './components/Header';
import './css/App.css'
import { Outlet } from 'react-router-dom';
import React, { createContext, useState } from 'react'

export const userIdContext = createContext();

const Layout = () => {
  const [userComprobaciones, setUserComprobaciones] = useState([])
  const login = (usuario) => {
    setUserComprobaciones(usuario)
  };

  return (
    <userContext.Provider value={{userComprobaciones, setUserComprobaciones, login}}>
      <>  
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    </userContext.Provider>
  )
}

export default Layout
