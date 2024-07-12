import '../styles/Header.css';
import { useState, useEffect, useRef } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('inicio');
  const observer = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = ['inicio', 'servicios', 'portafolios', 'contacto'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.current.observe(element);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="element-container">
        <div className="logo">
          <img src="https://i.imgur.com/kvpMPGy.png" alt="DEVS" />
          <span>DEVS</span>
        </div>
        <div className='nav'>
          <nav>
            {['inicio', 'servicios', 'portafolios', 'contacto'].map((section) => (
              <a 
                key={section}
                onClick={() => scrollToSection(section)} 
                className={activeSection === section ? 'active' : ''}
              >
                {section.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;