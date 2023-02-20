import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    return(
        <div>
            <header>
                <h1 className="titulo">Federico</h1>
       
        <nav className='navbar'>
           <div className={`menu ${isOpen && "open"}`}>
            <a href="#sobreMi">Sobre Mi</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
             </div>
        </nav>
    <div className={`navTogle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    </header>
    </div>

    )
}

export { Navbar }
