import '../styles/ContactPage.css';
function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contacto</h1>
      <div className="contact-info">
        <p>Utiliza las siguientes vías de contacto, o rellena el formulario.</p>
        <p>Vía E-mail: devs@gmail.com</p>
        <p>Por teléfono: +593 - 984572375</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Escribe tu nombre" />
        <input type="email" placeholder="Escribe tu e-mail" />
        <input type="tel" placeholder="Escribe tu teléfono (Opcional)" />
        <textarea placeholder="Escribe tu mensaje"></textarea>
        <button type="submit">ENVIAR MENSAJE</button>
      </form>
      <div className="social-media">
        <a href="#" className="instagram">Instagram</a>
        <a href="#" className="linkedin">LinkedIn</a>
      </div>
    </div>
  );
}

export default ContactPage;