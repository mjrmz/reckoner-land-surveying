import "./Services.css";
import ServiceCard from "../components/ServiceCard";

// Import ALL service images (edit filenames to match yours)
import boundaryImg from "../assets/images/Boundary Relocation Survey.png";
import topoImg from "../assets/images/Topographic Survey.png";
import subdivisionImg from "../assets/images/Subdivision and Consolidation Survey.png";
import structuralImg from "../assets/images/Structural Survey.png";
import asbuiltImg from "../assets/images/As-built Survey.png";
import resurveyImg from "../assets/images/Original Resurvey.png";
import bathymetricImg from "../assets/images/Bathymetric Survey.png";
import controlImg from "../assets/images/Project Control Surveys.png";
import caapImg from "../assets/images/CAAP Height Limitation Survey.png";
import droneImg from "../assets/images/Drone Aerial Mapping.png";
import verificationImg from "../assets/images/Verification Survey.png";
import titlingImg from "../assets/images/Titling Services.png";
import sketchImg from "../assets/images/Sketch Plan.png";

export default function Services() {
  const services = [
    { title: "Boundary Relocation Survey", image: boundaryImg },
    { title: "Topographic Survey", image: topoImg },
    { title: "Subdivision and Consolidation Survey", image: subdivisionImg },
    { title: "Structural Survey (Building & Fencing Permit)", image: structuralImg },
    { title: "As-built Survey", image: asbuiltImg },
    { title: "Original / Resurvey", image: resurveyImg },
    { title: "Bathymetric / Hydrographic Survey", image: bathymetricImg },
    { title: "Project Control Surveys", image: controlImg },
    { title: "CAAP Height Limitation Survey", image: caapImg },
    { title: "Drone Aerial Mapping / Orthophoto Mosaic", image: droneImg },
    { title: "Verification Survey", image: verificationImg },
    { title: "Titling Services and Consultation", image: titlingImg },
    { title: "Sketch Plan with Vicinity Map", image: sketchImg },
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-sub">
        We offer all kinds of Land Surveying and Engineering Mapping services to suit your needs.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}
