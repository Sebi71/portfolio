import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Card({ filterProjects, titleTwo }) {
  return (
    <div className="container-card">
      <h2 className="title-section">{titleTwo}</h2>
      <div className="card-content">
        {filterProjects.map((project, index) => (
          <div key={index}>
            <article className="card">
              <img
                className="card-img"
                src={project.cover}
                alt={`image du projet ${project.title}`}
              />
              <div className="card-info">
                <h3 className="card-title">{project.title}</h3>
              </div>
              <Link className="card-link" to={`/projects/${project.title}`}>
                <span className="card-btn">Découvrir le projet</span>
              </Link>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

Card.propTypes = {
  titleTwo: PropTypes.string,
  filterProjects: PropTypes.array,
};
