import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
   
    return(
        <div>
            <header>
        <h1 className="titulo">Federico</h1>
       
        <nav>
           <div className="menu">
            <a href="#sobreMi">Sobre Mi</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
             </div>
        </nav>
        <div className="hamburguesa">
            <ion-icon name="menu-outline"></ion-icon>
        </div>
    </header>
    </div>
    )
}

export { Navbar }
