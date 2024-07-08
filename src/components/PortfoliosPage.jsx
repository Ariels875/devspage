import '../styles/PortfoliosPage.css';

function PortfoliosPage() {
  return (
    <div className="portfolios-page">
      <h1>PORTAFOLIOS</h1>
      <div className="portfolio-grid">
        <div className="portfolio">
          <img src="https://i.imgur.com/fli08dk.png" alt="Ariel Castro" />
          <h2>ARIEL CASTRO</h2>
          <p>Desarrollador especializado en el frontend</p>
          <button>VER PORTAFOLIO</button>
        </div>
        <div className="portfolio">
          <img src="https://i.imgur.com/6900Hq9.png" alt="Cristian Herrera" />
          <h2>CRISTIAN HERRERA</h2>
          <p>Desarrollador especializado en el backend</p>
          <button>VER PORTAFOLIO</button>
        </div>
      </div>
    </div>
  );
}

export default PortfoliosPage;