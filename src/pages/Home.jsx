import "./Home.css";
import heroVideo from "../assets/videos/hero.mp4"; // Replace with your video path

export default function Home() {
  return (
    <section id="home" className="home-section">
      {/* Background Video */}
      <video className="home-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay for content (no tint) */}
      <div className="home-overlay">
        <div className="home-text">
          <h1>
            Precision. Accuracy. <span>Excellence.</span>
          </h1>
          <p>
            Reckoner Land Surveying delivers reliable, accurate, and professional 
            land surveying services using modern technology and trusted expertise.
          </p>
          <a href="#contact" className="home-btn">Get a Quote</a>
        </div>
      </div>
    </section>
  );
}