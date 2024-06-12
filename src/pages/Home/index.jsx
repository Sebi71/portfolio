import NavBar from "../../components/NavBar";
import AboutMe from "../../components/AboutMe";
import Slider from "../../components/Slider";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";

import { useEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

import projects from "../../data/projects.json"
import "./index.scss"

export default function Home() {
  const slideInLeft = (elem) => {
    gsap.fromTo(
      elem, 
      {
        opacity: 0,
        x: -200},
      {
        opacity: 1,
        x: 0,
        delay: 0.4,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 80%",
          end: "bottom center",
        }
      }
    )
  }

  useEffect(() => {
    slideInLeft("#box1")
  },[])
  useEffect(() => {
    slideInLeft("#box2")
  },[])


  return (
    <>
        <NavBar />
          <AboutMe />
          <section className="slider-skills">
            <div id="box1">
              <Slider 
                title="MES PROJETS"
                images={projects.map(project => project.cover)}
                filter={true}
                btnRadio={false}/>
            </div>
            <div id="box2">
              <Skills />
            </div>
          </section>
        <Footer />
    </>
  )
}