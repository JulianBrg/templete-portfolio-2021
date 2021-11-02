import { useState } from "react";
import "./Contact.scss"

export default function Contact() {

    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="Contact" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Correo" />
                    <textarea placeholder="Mensaje"></textarea>
                    <button type="submit">Enviar</button>
                    {message && <span>Gracias, estamos en contacto :)</span>}
                </form>
            </div>
        </div>
    )
}
