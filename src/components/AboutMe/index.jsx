import profilPhoto from "../../assets/images/profil.webp"
import pdf from "../../assets/images/PDF.webp"
import "./index.scss"

export default function AboutMe() {
  return (
    <section className="about-me">
        <h1 className="title-about-me">A PROPOS DE MOI</h1>
        <div className="profil">
            <img 
                className="photo-profil" 
                src={profilPhoto} 
                alt="photo de profil de sébastien" />
            <div className="text-profil">
                <p className="text">Bonjour, je m&apos;appelle Sébastien et je suis développeur front-end dans la création de sites et d&apos;applications Web. </p>
                <p className="text">Après plusieurs années passées dans le domaine agricole, dont 6 en tant que technico-commercial, j&apos;ai décidé de changer de direction et de suivre ma passion en réalisant une formation de 9 mois avec Openclassrooms, afin de me reconvertir en tant que développeur web.</p>
                <p className="text">J&apos;ai un attrait particulier pour le secteur informatique et les nouvelles technologies. Concevoir des sites et des applications Web à partir de zéro me passionne et grâce à ma formation, j&apos;ai acquis de solides compétences en HTML, CSS, JavaScript, React et autres outils nécessaires à la conception. Je suis curieux, rigoureux et toujours à la recherche de nouvelles solutions innovantes pour répondre aux besoins.</p>
            </div>
        </div>
                <a 
                    className="CV" 
                    target="_blank" 
                    href="">Découvrir mon CV 
                    <img className="logo-pdf" src={pdf} alt="logo-pdf" />
                </a>
    </section>
  )
}