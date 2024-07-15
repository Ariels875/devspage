import '../styles/ContactPage.css';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>CONTACTO</h1>
      <div className="contact-content">
        <div className="contact-info">
          <p>Utiliza las siguientes vías de contacto, o rellena el formulario.</p>
          <p>Vía E-mail: <a href="mailto:devs@gmail.com">devs@gmail.com</a></p>
          <p>Por teléfono: <a href="tel:+593984572375">+593 - 984572375</a></p>
          <div className="social-media">
            <p>Nuestras redes sociales</p>
            <a href="https://www.facebook.com/profile.php?id=61562707679910&mibextid=ZbWKwL" aria-label="Instagram"><FaFacebook /></a>
            <a href="http://www.linkedin.com/in/devssch" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/Ariels875" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Escribe tu nombre" />
          <input type="email" placeholder="Escribe tu e-mail" />
          <input type="tel" placeholder="Escribe tu teléfono (Opcional)" />
          <textarea placeholder="Escribe tu mensaje"></textarea>
          <button className="btn" type="submit">
            <strong>Enviar Mensaje</strong>
          </button>

        </form>
      </div>
      <div className="footer">
        DEVS - 2024
      </div>
    </div>
  );
}

export default ContactPage;