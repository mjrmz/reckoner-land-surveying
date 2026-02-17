import "./ProjectsCard.css";

export default function ProjectsCard({ title, type, description, location, image }) {
  return (
    <div className="project-card">
      {image && (
        <div className="project-img-wrapper">
          <img src={image} alt={title} className="project-img" />
        </div>
      )}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-type">{type}</p>
        <p className="project-desc">{description}</p>
        <p className="project-location">📍 {location}</p>
      </div>
    </div>
  );
}
