import React from 'react';
import'./Form.css';


const Form= () => {
    return(
        <>
            <div className="contacto" id="contacto">
 
                <h1>Contacto</h1>
                <h2>Te dejo este formulario de contacto para que puedas dejarme el mensaje que desees, pronto lo estaré leyendo para responderte.</h2>
            </div>

            <div className="formulario">
                <form action="https://formspree.io/f/mzbqdwzl" method="POST" className='form' target='_blank'>
                    <div className="llaman">
                        <label for="Me llaman">Me llaman:</label>
                        <input type="text" id="nombre" name="nombreUsuario" required/>
                    </div>



                    
                <div class="email">
                    <label for="email">Mi E-mail:</label>
                    <input type="email" name="email" id="email"  required/>
                </div>




                    <div className="mensajes">
                    <label for="mensajes">Mensaje:</label>
                    <textarea name="mensajes" id="mensajes" cols="30" rows="10" ></textarea>
                    </div>  
            
                <div class="bts"> 
                    <button className="enviar" type="submit">Enviar</button>
                </div> 
 
        </form>
        </div>
        </>
    )
}
export { Form }