import projects from "../../data/projects.json"
import "./index.scss"

export default function Slider() {
  return (
    <div className="slider">
        <img className="slide" src={projects[0].cover} alt="" />

        {/* {projects.map((project) =><img key={project.id}>{project.cover}</img>)} */}
    </div>
  )
}



// export default function Slider() {
//   return (
//     <div>
//         <img src={projects[0].cover} alt="" />
//     </div>
//   )
// }