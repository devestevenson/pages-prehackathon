import React from 'react'
import '../menu/Navbar.css'
import favicon from "../menu/favicon.png"

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
        <div className='logo'><img src={favicon} alt="" /></div>
        <ul className='navbox'>
            <a href="#.com">Noticias</a>
            <a href="google.com">Nosotros</a>
        </ul>
        <button href="formulario.com">Participantes</button>
      </nav>
    </div>
  )
}

export default Navbar
