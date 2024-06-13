import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider";

import "./index.scss"
import projects from "../../data/projects.json"

export default function ProjectInfo() {
  const { id } = useParams();
  const project = projects.find(project => project.title === id);

  if (!project) {
    return (
      <>
        <NavBar />
        <div><h2>Projet non trouvé</h2></div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <section className="container-project">
        <h1 className="project-title">{project.title}</h1>
        <Slider
          time={3000}
          images={project.pictures}
          filter={false}
          btnRadio={true} />
      </section>
      <Footer />
    </>
  )
}