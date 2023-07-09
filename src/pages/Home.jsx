import './Home.css';

export default function Home() {
  return (
    <div className="container">
      <video style={{ width: '100%', position: 'fixed', minHeight: '100vh', objectFit: 'cover', zIndex: '-1' }} autoPlay muted loop id="background-video">
        <source src="bg.mp4" type="video/mp4" />
      </video>
      <div className='content'>
        <h2>The Next Generation of Websites: Technological, Simple, and Intelligent Design.</h2>
        <nav>
          <ul>
            <li>about us</li>
            <span>|</span>
            <li>news</li>
            <span>|</span>
            <li>review</li>
            <span>|</span>
            <li>articles</li>
            <span>|</span>
            <li>contact</li>
          </ul>
        </nav>
        <div className='button-container'>
          <button id='learn'>LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}
