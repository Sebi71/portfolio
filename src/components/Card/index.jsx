import PropTypes from "prop-types"
import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../../data/projects.json"
import "./index.scss"

export default function Card({ titleOne, titleTwo }) {
  const [selectProject, setSelectProject] = useState("Tous")

  const handleFilter = (category) => {
    setSelectProject(category)
  }

  const filterProjects = projects.filter((project) =>
    selectProject === "Tous" ? true : project.category === selectProject)

  return (
    <section className='global-container-cards'>
      <h1 className="title-page">{titleOne}</h1>
      <div className="btn-container">
        <button 
          className="btn-filter" 
          onClick={() => handleFilter('Tous')}>
            Tous
        </button>
        <button 
          className="btn-filter" 
          onClick={() => handleFilter("cat1")}>
            HTML / CSS
        </button>
        <button 
          className="btn-filter"
          onClick={() => handleFilter("cat2")}>
            JavaScript
        </button>
        <button 
          className="btn-filter"
          onClick={() => handleFilter("cat3")}>
            React
        </button>
        <button 
          className="btn-filter"
          onClick={() => handleFilter("cat4")}>
            Autres
        </button>
        </div>
      <div className="section-container">
        <h2 className="title-section">{titleTwo}</h2>
        <div className="card-content">
          {filterProjects.map((project, index) => (
            <div key={index}>
              <article className="card">
                <img 
                  className="card-img"
                  src={project.cover} 
                  alt={`image du projet ${project.title}`} />
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
    </section>
  );
}

Card.propTypes = {
  titleOne: PropTypes.string,
  titleTwo: PropTypes.string,
}
