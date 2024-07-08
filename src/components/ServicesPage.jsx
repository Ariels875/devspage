import '../styles/ServicesPage.css';

function ServicesPage() {
  return (
    <div className="services-page">
      <h1>SERVICIOS</h1>
      <div className="services-grid">
        <div className="service">
          <h2>Desarrollo Web Básico</h2>
          <ul>
            <li>Sitio web de hasta 5 páginas</li>
            <li>Diseño responsivo</li>
            <li>Formulario de contacto</li>
            <li>Optimización SEO básica</li>
          </ul>
          <p>Precio: $200</p>
        </div>
        <div className="service">
          <h2>Aplicación Web Perzonalizada</h2>
          <ul>
            <li>Desarrollo front-end y back-end</li>
            <li>Base de datos y gestión de usuarios</li>
            <li>Integración de APIs</li>
            <li>Pruebas y depuración</li>
          </ul>
          <p>Precio: $500</p>
        </div>
        <div className="service">
          <h2>Desarrollo de Aplicaciones Móviles</h2>
          <ul>
            <li>Desarrollo para Android e IOS</li>
            <li>Interfaz de usuario intuitiva</li>
            <li>Integración de APIs</li>
            <li>Publicación en App Store y Google Play</li>
          </ul>
          <p>Precio a consultar</p>
        </div>
        {/* Add other services similarly */}
      </div>
    </div>
  );
}

export default ServicesPage;