import { NavLink } from "react-router-dom"
import logo from "../../assets/images/logo.webp"
import "./index.scss"

export default function NavBar() {
  return (
    <nav className="nav">
        <img 
            loading="lazy"
            className="logo"
            src={logo} 
            alt="logo du site de Sébastien Juillet" />
        <div className="links">
            <NavLink 
                className={({isActive}) => `${isActive ? "select-link" : "no-active"}`}
                to="/">
                    Accueil
            </NavLink>
            <NavLink 
                className={({isActive}) => `${isActive ? "select-link" : "no-active"}`}
                to="/projects">
                    Projets
            </NavLink>
            <a href="#contact">Contact</a>
        </div>
    </nav>
  )
}