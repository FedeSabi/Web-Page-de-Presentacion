import React from 'react';
import './Footer.css'

const Footer= () => {
    return(
        <div>
        <footer>
           <div className="sigamos">
                <h2>sigamos conectados y conoce más de mis proyectos</h2>
           </div> 
           <div className="redes">
           <a href="https://www.linkedin.com/in/federicosabiche/"><button>linkedln</button></a>  
           <a href="https://www.instagram.com/fede_sabiche/"><button>Instagram</button></a>  
           <a href="mailto:federico.sabiche@gmail.com"><button>Gmail</button></a> 
        </div>
        <div className="gmail">
            <a href="mailto:federico.sabiche@gmail.com">federico.sabiche@gmail.com</a>   
        </div>
        <div>  
        <h3 className="gracias">Gracias por navegar en mi pagina web.</h3>
        </div>
        </footer>
        </div>
    )
}

export { Footer }