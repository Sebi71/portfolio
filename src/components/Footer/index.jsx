import logo from "../../assets/images/logo.webp"
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaMapLocationDot } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";



import "./index.scss"

export default function Footer() {
  return (
    <footer className="footer">
        <div className="main-container">
            <div className="container-logo">
                <img 
                    loading="lazy"
                    className="logo"
                    src={logo} 
                    alt="logo du site de sébastien juillet" />
            </div>
            <div>
                <h2 id="contact">Contact :</h2>
                <ul className="list-footer">
                    <li className="link-footer">
                        <MdAlternateEmail className="mail"/>
                        <a 
                            className="link"
                            href="mailto:seb.juillet@outlook.fr">
                                seb.juillet@outlook.fr
                        </a>
                    </li>
                    <li className="link-footer">
                        <FaLinkedin className="linkedin"/>
                        <a 
                            className="link"
                            href="https://www.linkedin.com/in/sébastien-juillet-327a17a7" 
                            target="_blank" 
                            rel="noreferrer">
                                Profil LinkedIn
                        </a>
                        </li>
                    <li className="link-footer">
                        <FaGithub className="github"/>
                        <a 
                            className="link"
                            href="https://github.com/Sebi71" 
                            target="_blank" 
                            rel="noreferrer">
                                Lien GitHub
                        </a>
                    </li>
                    <li className="link-footer">
                        <CiLocationOn className="location"/>
                        <a 
                            className="link"
                            href="https://maps.app.goo.gl/vBLG2MEn7vVzMiJx6"
                            target="_blank" 
                            rel="noreferrer">
                                71300 Montceaux les Mines, France
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <span className="copyright">© 2024 Tous droits réservés - Sébastien Juillet</span>
    </footer>
  )
}