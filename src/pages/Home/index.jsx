import NavBar from "../../components/NavBar";
import AboutMe from "../../components/AboutMe";
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";

import "./index.scss"

export default function Home() {
  return (
    <>
        <NavBar />
          <AboutMe />
          <section className="slider-skills">
            <Slider />
          </section>
        <Footer />
    </>
  )
}