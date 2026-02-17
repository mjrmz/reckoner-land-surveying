import "./ServiceCard.css";

export default function ServiceCard({ image, title }) {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
      <div className="service-info">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
