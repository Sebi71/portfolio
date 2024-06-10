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
      <h2 className="title-page">{titleOne}</h2>
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
        <h3 className="title-section">{titleTwo}</h3>
        <div className="card-content">
          {filterProjects.map((project, index) => (
            <Link key={index} to={`/projects/${project.title}`}>
              <article>
                <img 
                  className="card-img"
                  src={project.cover} 
                  alt={project.title} />
                {/* <div>
                  <h4>{project.title}</h4>
                  <p>{project.resum}</p>
                </div> */}
              </article>
            </Link>
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
