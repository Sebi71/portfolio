import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import "./index.scss"
export default function Slider({title, time, images, filter, btnRadio}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideNumber = images.length;

    useEffect(() => {
        const interval = setTimeout(() => {
        setCurrentIndex(currentIndex < slideNumber - 1 ? currentIndex + 1 : 0);
        }, time);
        return () => clearTimeout(interval);
    }, [currentIndex, slideNumber, time]);

    const handleSwipe = (dir) => {
      if (dir === "Left") {
        setCurrentIndex(currentIndex < slideNumber - 1 ? currentIndex + 1 : 0);
      } else if (dir === "Right") {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : slideNumber - 1);
      }
    };
  
    const handlers = useSwipeable({
      onSwipedLeft: () => handleSwipe("Left"),
      onSwipedRight: () => handleSwipe("Right"),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true,
    });
  

  return (
    <>
      <h2 className="slider-title">{title}</h2>
      <div className="slider" {...handlers}>
          {images.map((image, index) => (
          currentIndex === index && (
            <img className={` slide slide--${
              currentIndex === index && "display"}`} 
              key={index} 
              src={image} 
              alt="" />)
          ))}
          {filter && (
            <Link to="/projects" className="view">
              <span className="decover-title">Découvrir mes projets</span>
            </Link>
          )}
          {btnRadio && (
            <fieldset className="radio-button">
              <legend aria-label="Naviguer entre les slides" />
              {images?.map((_, radioIdx) => (
                <input
                  className="radio-button__input"
                  key={radioIdx}
                  type="radio"
                  name="radio-button"
                  aria-label={`radio button slide ${radioIdx + 1}`}
                  checked={currentIndex === radioIdx}
                  onChange={() => setCurrentIndex(radioIdx)}
                />
              ))}
            </fieldset>
          )}
      </div>
    </>
  )
}

Slider.propTypes = {
  title: PropTypes.string,
  time: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  filter: PropTypes.bool.isRequired,
  btnRadio: PropTypes.bool.isRequired
}