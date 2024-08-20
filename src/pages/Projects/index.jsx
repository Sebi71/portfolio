import Footer from "../../components/Footer";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import NavBar from "../../components/NavBar";
import { useEffect, useState } from "react";
import projects from "../../data/projects.json";
import projectsPerso from "../../data/projectsPerso.json";
import "./index.scss";

export default function Projects() {
  const [selectProject, setSelectProject] = useState("Tous");

  const handleFilter = (category) => {
    setSelectProject(category);
  };

  const filterProjects = projects.filter((project) =>
    selectProject === "Tous" ? true : project.category === selectProject
  );

  const filterProjectsPerso = projectsPerso.filter((project) =>
    selectProject === "Tous" ? true : project.category === selectProject
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <section className="global-container-cards">
        <h1 className="title-page">MES PROJETS</h1>
        <Filter handleFilter={handleFilter} />
        <Card
          titleTwo="Projets OpenclassRooms :"
          filterProjects={filterProjects}
        />
        <Card titleTwo="Projets personnels :" 
        filterProjects={filterProjectsPerso} />
      </section>
      <Footer />
    </>
  );
}
