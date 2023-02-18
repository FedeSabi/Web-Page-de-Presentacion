import React from 'react';
import './Cards.css';
import html5 from '../../assets/html5.png';
import CSS from '../../assets/css.png';
import JS1 from '../../assets/JS1.png';
import react1 from '../../assets/react1.png';

const Cards = () => {
    return(
        <div>
            <h1 className="proyectos" id="proyectos">Proyectos</h1>
  
        <div className="contenedorCards1" >
            <div className="texto1">
                <h1><b>Diseño web ( HTML / CSS )</b></h1>
                <p className="lorem">HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web.CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.</p>
               <a href="https://lenguajehtml.com/html/"><button><b>Ver Proyecto</b></button></a>
            </div>        
     <div className="img1">           
                <img className="html" src={html5} alt="html"/>
                <img className="css" src={CSS} alt="css"/>
    </div>
        </div>
<div className="contenedorCards2" >
    <div className="texto2">
        <h1><b>Programación ( JavaScript )</b></h1>
        <p className="lorem">JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web.</p>
       <a href="https://www.javascript.com/"><button><b>Ver Proyecto</b></button></a>
    </div>        
     <div className="img2">           
                <img className="JavaScript" src={JS1} alt="JavaScript"/>           
    </div>
</div>
<div className="contenedorCards3" >
    <div className="texto3">
        <h1><b>Programación ( React )</b></h1>
        <p className="lorem">React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.</p>
       <a href="https://es.reactjs.org/"><button><b>Ver Proyecto</b></button></a> 
    </div>        
    <div className="img3">           
                <img className="JavaScript" src={react1} alt="JavaScript"/>           
    </div>
</div>

</div>

    )
}

export { Cards }












