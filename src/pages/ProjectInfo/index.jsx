import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { useParams } from "react-router-dom";

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
      <div><h2>{project.title}</h2></div>
      <Footer />
    </>
  )
}