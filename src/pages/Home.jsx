import "./Home.css";
import heroImg from "../assets/images/reckonerhome.png";

export default function Home() {
  return (
    <section id="home" className="home-section">
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

        {/* 🔥 REMOVED POP-UP IMAGE */}
        {/* <div className="home-image">
          <img src={heroImg} alt="Reckoner Land Surveying" />
        </div> */}

      </div>
    </section>
  );
}
