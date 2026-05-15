import { Link } from "react-router-dom";

function ProjectCard({ title, description, image, link, tags, featured }) {
  return (
    <Link to={link} className={`project-card ${featured ? "featured" : ""}`}>
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-overlay">
          <span className="view-project">View Project →</span>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        {tags && tags.length > 0 && (
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export default ProjectCard;
