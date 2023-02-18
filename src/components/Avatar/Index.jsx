import React from 'react';
import './Avatar.css';
import Avatar2 from'../../assets/avatar2.png';

const Avatar = () => {
    return(
        
<section className="avatar" >
            <div className="imgAvatar">
                <img src={Avatar2} alt="personaje"/>
            </div>
            <div className="fede">
                <h1>Federico Sabiche</h1>
                <h2>Ux Content / Ui Designer</h2>
                <p>Mi objetivo es brindarle el usuario una experiencia confortable, inclusiva y profesional.
 Soy un apasionado por los pixeles y el diseño digital.
                </p>
            </div>
        </section>

    )
}

export { Avatar }




