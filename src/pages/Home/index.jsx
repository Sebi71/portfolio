import NavBar from "../../components/NavBar";
import AboutMe from "../../components/AboutMe";
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

import projects from "../../data/projects.json"
import "./index.scss"

export default function Home() {
  const navigate = useNavigate();

  const handleSliderClick = () => {
    navigate('/projects');
  }

  return (
    <>
        <NavBar />
          <AboutMe />
          <section className="slider-skills">
            <Slider 
              images={projects.map(project => project.cover)}
              filter={true}
              btnRadio={false}
              navigate={handleSliderClick}/>
          </section>
        <Footer />
    </>
  )
}