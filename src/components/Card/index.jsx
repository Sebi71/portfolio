// import PropTypes from "prop-types"
// import { useState, useEffect } from "react"
// import "./index.scss"
// import { Link } from "react-router-dom";

// export default function Slider({images, filter}) {
//     const [isHovered, setIsHovered] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const slideNumber = images.length

//     const handleMouseEnter = () => {
//       setIsHovered(true);
//     }

//     const handleMouseLeave = () => {
//       setIsHovered(false);
//     }

//     useEffect(() => {
//         const interval = setTimeout(() => {
//         setCurrentIndex(currentIndex < slideNumber - 1 ? currentIndex + 1 : 0);
//         }, 4000);
//         return () => clearTimeout(interval);
//     }, [currentIndex, slideNumber]);

//   return (
//     <div 
//       className="slider"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}>
//         {images.map((image, index) => (
//         currentIndex === index && (
//           <img className={` slide slide--${
//             currentIndex === index && "display"}`} 
//             key={index} 
//             src={image} 
//             alt="" />)
//         ))}
//         {isHovered && (
//           <Link 
//             to="/projects"
//             className={filter}>
//               <h2 className="decover-title">Découvrir mes projets</h2>
//           </Link>
//         )}
//         <fieldset className="radio-button">
//           <legend aria-label="Naviguer entre les slides" />
//           {images?.map((_, radioIdx) => (
//             <input
//               className="radio-button__input"
//               key={radioIdx}
//               type="radio"
//               name="radio-button"
//               aria-label={`radio button slide ${radioIdx + 1}`}
//               checked={currentIndex === radioIdx}
//               onChange={() => setCurrentIndex(radioIdx)}
//             />
//           ))}
//         </fieldset>
//     </div>
//   )
// }

// Slider.propTypes = {
//   images: PropTypes.array,
//   filter: PropTypes.string
// }