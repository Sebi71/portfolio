import logo from "../../assets/images/logo.webp"
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./index.scss"

export default function Footer() {
  return (
    <footer className="footer">
        <div className="main-container">
            <div className="container-logo">
                <img 
                    className="logo"
                    src={logo} 
                    alt="logo du site de sébastien juillet" />
            </div>
            <div>
                <h3 id="contact">Contact :</h3>
                <ul className="list-footer">
                    <li className="link-footer">
                        <MdAlternateEmail />
                        <a href="mailto:seb.juillet@outlook.fr">seb.juillet@outlook.fr</a>
                    </li>
                    <li className="link-footer">
                        <FaLinkedin />
                        <a href="https://www.linkedin.com/in/sébastien-juillet-327a17a7" target="_blank" rel="noreferrer"> Profil LinkedIn</a></li>
                    <li className="link-footer">
                        <FaGithub />
                        <a href="https://github.com/Sebi71" target="_blank" rel="noreferrer">Lien GitHub</a>
                        </li>
                </ul>
            </div>
        </div>
        <span className="copyright">© 2024 Tous droits réservés - Sébastien Juillet</span>
    </footer>
  )
}