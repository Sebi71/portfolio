import {acquiredSkills, notAcquiredSkills} from "../../utils/Skills";
import "./index.scss"

export default function Skills() {

return (
    <div className="global-container">
      <div className="container-skills">
        <h2 className="title-skills">Compétences acquises</h2>
        <div className="logos-skills">
            {acquiredSkills.map((logo, index) => (
                <div className="content" key={index}>
                    <img
                        className="skills"
                        src={logo.icon} 
                        alt={`compétences ${logo.title}`} />
                    <h3 className="logo-title">{logo.title}</h3>
                </div>
            ))}
        </div>
      </div>
      <div className="container-skills">
        <h2 className="title-skills">Compétences à développer et à acquerir</h2>
        <div className="logos-skills">
            {notAcquiredSkills.map((logo, index) => (
                <div className="content" key={index}>
                    <img
                        className="skills" 
                        src={logo.icon} 
                        alt={`compétences ${logo.title}`} />
                    <h3 className="logo-title">{logo.title}</h3>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
