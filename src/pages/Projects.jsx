import { useState } from "react";
import "./Projects.css";
import ProjectsCard from "../components/ProjectsCard";

import rvmImg from "../assets/images/rvmapp.jpg"; // replace with real images

export default function Projects() {
  const projects = [
    {
      title: "15-Hectare Topographic Survey",
      description:
        "Completed for site development and engineering design of a multi-functional building and recreational park.",
      location: "Tacunan, Mintal, Davao City",
      type: "Topographic Survey",
      image: rvmImg,
    },
    {
      title: "Topographic & Relocation Survey",
      description:
        "Survey for subdivision planning and property boundary verification.",
      location: "Toscana Subdivision, Puan, Davao City",
      type: "Topographic / Relocation",
      image: rvmImg,
    },
    {
      title: "Boundary Relocation Survey",
      description: "Boundary verification for residential lot development.",
      location: "ASPEN Subdivision, Communal, Davao City",
      type: "Relocation Survey",
      image: rvmImg,
    },
    {
      title: "Structural Relocation Survey",
      description: "Structural positioning for building permit application.",
      location: "Buhangin, Davao City",
      type: "Structural Survey",
      image: rvmImg,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-sub">
          A showcase of completed land surveying and mapping projects across
          Davao Region and nearby provinces.
        </p>
      </div>

      <div className="slider-container">
        <div
          className="slides-wrapper"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {projects.map((proj, index) => (
            <div
              key={index}
              className={`slide ${currentSlide === index ? "active" : ""}`}
            >
              <ProjectsCard
                title={proj.title}
                description={proj.description}
                location={proj.location}
                type={proj.type}
                image={proj.image}
              />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button className="nav-btn left" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="nav-btn right" onClick={nextSlide}>
          &#10095;
        </button>

        {/* Dots */}
        <div className="dots">
          {projects.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
