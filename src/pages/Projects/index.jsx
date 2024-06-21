import Footer from "../../components/Footer";
import Card from "../../components/Card";
import NavBar from "../../components/NavBar";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
        <Card
        titleOne="MES PROJETS"
        titleTwo="Projets OpenclassRooms :" />
      <Footer />
    </>
  )
}