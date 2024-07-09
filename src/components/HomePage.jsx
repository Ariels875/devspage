import '../styles/HomePage.css';
function HomePage() {
  return (
    <div className="home-page">
      <h1>DEVS</h1>
      <p>Innovación y calidad en cada proyecto.</p>
      <div className="scroll-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"/>
        </svg>
      </div>
    </div>
  );
}

export default HomePage;