import '../styles/ContactPage.css';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

function ContactPage() {
  const [state, handleSubmit] = useForm("xnnangwo");
  if (state.succeeded) {
    alert("¡Gracias por tu mensaje!");
  }

  return (
    <div className="contact-page">
      <h1>CONTACTO</h1>
      <div className="contact-content">
        <div className="contact-info">
          <p>Utiliza las siguientes vías de contacto, o rellena el formulario.</p>
          <p>Vía E-mail: <a href="mailto:devssch@gmail.com">devssch@gmail.com</a></p>
          <p>Por teléfono: <a href="tel:+593984572375">+593 - 984572375</a></p>
          <div className="social-media">
            <p>Nuestras redes sociales</p>
            <a href="https://www.facebook.com/profile.php?id=61562707679910&mibextid=ZbWKwL" aria-label="Facebook"><FaFacebook /></a>
            <a href="http://www.linkedin.com/in/devssch" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/Ariels875" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input id="name" type="text" name="name" placeholder="Escribe tu nombre" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input id="email" type="email" name="email" placeholder="Escribe tu e-mail" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input id="phone" type="tel" name="phone" placeholder="Escribe tu teléfono" />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />

          <textarea id="message" name="message" placeholder="Escribe tu mensaje" required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button className="btn" type="submit" disabled={state.submitting}>
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
