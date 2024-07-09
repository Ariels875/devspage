import '../styles/ContactPage.css';
function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contacto</h1>
      <div className="contact-info">
        <p>Utiliza las siguientes vías de contacto, o rellena el formulario.</p>
        <p>Vía E-mail: </p>
        <a href="mailto:" id="email">devs@gmail.com</a>
        <p>Por teléfono: </p>
        <a href='tel:+593982856987' id="number">+593982856987</a>
      </div>
      <div className="social-media">
        <p>Siguenos en redes</p>
        <a href="#" className="instagram">Instagram</a>
        <a href="#" className="linkedin">LinkedIn</a>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Escribe tu nombre" />
        <input type="email" placeholder="Escribe tu e-mail" />
        <input type="tel" placeholder="Escribe tu teléfono (Opcional)" />
        <textarea placeholder="Escribe tu mensaje"></textarea>
        <button type="submit">ENVIAR MENSAJE</button>
      </form>

    </div>
  );
}

export default ContactPage;