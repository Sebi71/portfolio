import { NavLink, Link } from "react-router-dom"
import logo from "../../assets/images/logo.webp"
import "./index.scss"

export default function NavBar() {
  return (
    <nav className="nav">
        <img 
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
            <Link to="contact">Contact</Link>
        </div>
    </nav>
  )
}