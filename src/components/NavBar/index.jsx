import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import "./index.scss";

export default function NavBar() {
  const handleContactClick = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav">
      <img
        loading="lazy"
        className="logo"
        src={logo}
        alt="logo du site de Sébastien Juillet"
      />
      <div className="links">
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "select-link" : "no-active"}`
          }
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "select-link" : "no-active"}`
          }
          to="/projects"
        >
          Projets
        </NavLink>
        <Link 
            className="no-active" 
            to=""
            onClick={handleContactClick}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
