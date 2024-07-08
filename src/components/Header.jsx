import '../styles/Header.css';
import  { useState, useEffect } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'portafolios', 'contacto'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element.offsetTop <= scrollPosition + 100) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <div className="logo">DEVS</div>
      <nav>
        <a onClick={() => scrollToSection('inicio')} className={activeSection === 'inicio' ? 'active' : ''}>INICIO</a>
        <a onClick={() => scrollToSection('servicios')} className={activeSection === 'servicios' ? 'active' : ''}>SERVICIOS</a>
        <a onClick={() => scrollToSection('portafolios')} className={activeSection === 'portafolios' ? 'active' : ''}>PORTAFOLIOS</a>
        <a onClick={() => scrollToSection('contacto')} className={activeSection === 'contacto' ? 'active' : ''}>CONTACTO</a>
      </nav>
    </header>
  );
}

export default Header;