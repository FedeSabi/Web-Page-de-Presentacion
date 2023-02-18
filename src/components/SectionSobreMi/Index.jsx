import React from 'react';
import './SectionSobreMi.css';
import Fede1 from'../../assets/fede1.jpg';

const SectionSobreMi = () => {
    return(
        <div>
            <section className="sobreMi" id="sobreMi">
            <div className="fotoFede">
                <img className='fedeImg' src= {Fede1} alt="fede"/>
            </div>
            <div className="tituloSobreMi">
                <h1>Sobre Mi</h1>
                <p>Si hay algo que nos hace especial es nuestra historia, yo soy Federico Programador y desarrollador web. Me permiten ofrecer productos valiosos y accesibles.
            Con mis redacciones he realizado proyectos guiando al usuario a una conversion exitosa sin presiones.
            Mi afinidad con la experiencia del usuario comenzo por curiosidad, pero pronto comence a formarme, para experimentar y aprender a cubrir las necesidades de mis clientes, creando un vínculo con sus productos.
            Ser autodidacta es otra de mis pasiones de la cual me capacito día a día para lograr y obtener un resultado positivo sin dejar de lado la creatividad y la empatia.</p>     
            </div>
        </section>
        </div>
    )
}

export { SectionSobreMi }