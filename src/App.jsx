import Header from './components/Header';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import PortfoliosPage from './components/PortfoliosPage';
import ContactPage from './components/ContactPage';
import StarBackground from './components/StarBackground';

function App() {
  return (
    <div className="App">
      <StarBackground />
      <Header />
      <main>
        <section id="inicio"><HomePage /></section>
        <section id="servicios"><ServicesPage /></section>
        <section id="portafolios"><PortfoliosPage /></section>
        <section id="contacto"><ContactPage /></section>
      </main>
    </div>
  );
}

export default App;