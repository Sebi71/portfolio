import profilPhoto from "../../assets/images/profil.webp"
import pdf from "../../assets/images/PDF.webp"
import "./index.scss"

export default function AboutMe() {

    const handleClick = () => {
        window.open("https://drive.google.com/file/d/1GHss-nxKjxVADyvbLleaelikyLzsRV7s/view?usp=sharing", "_blank");
    }

  return (
    <section className="about-me">
        <h1 className="title-about-me">A PROPOS DE MOI</h1>
        <div className="profil">
            <img 
                loading="lazy"
                className="photo-profil" 
                src={profilPhoto} 
                alt="photo de profil de sébastien" />
            <div className="text-profil">
                <p className="text">Bonjour, je m&apos;appelle Sébastien et <span className="keyword">je suis développeur front-end</span> dans la création de sites et d&apos;applications Web. </p>
                <p className="text">Après plusieurs années passées dans le domaine agricole, dont 6 en tant que <span className="keyword">technico-commercial</span>, j&apos;ai décidé de changer de direction et de suivre ma passion en réalisant une <span className="keyword">formation de 9 mois avec Openclassrooms</span>, afin de me reconvertir en tant que développeur web.</p>
                <p className="text">J&apos;ai un attrait particulier pour le secteur informatique et les nouvelles technologies. Concevoir des sites et des applications Web à partir de zéro me passionne et grâce à ma formation, j&apos;ai acquis de solides compétences en <span className="keyword">HTML, CSS, JavaScript, React et autres outils nécessaires à la conception</span>. Je suis curieux, rigoureux et toujours à la recherche de nouvelles solutions innovantes pour répondre aux besoins.</p>
            </div>
        </div>
                <button 
                    className="CV" 
                    target="_blank" 
                    onClick={handleClick}>
                        Découvrir mon CV 
                        <img className="logo-pdf" src={pdf} alt="logo-pdf" />
                </button>
    </section>
  )
}