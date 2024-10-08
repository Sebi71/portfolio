import NavBar from "../../components/NavBar";
import NotFound from "../NotFound";
import Slider from "../../components/Slider";
import CustomizedAccordions from "../../components/Collapse";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import "./index.scss";
import projects from "../../data/projects.json";
import projectsPerso from "../../data/projectsPerso.json";

export default function ProjectInfo() {
  const { id } = useParams();
  const project =
    projects.find((project) => project.title === id) ||
    projectsPerso.find((project) => project.title === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <>
        <NotFound />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <section className="container-project">
        <h1 className="project-title">{project.title}</h1>
        <Slider
          home={false}
          time={3000}
          images={project.pictures}
          filter={false}
          btnRadio={true}
        />
        <CustomizedAccordions
          resum={project.resum}
          description={project.description}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
          skills={project.skills}
        />
      </section>
      <Footer />
    </>
  );
}
