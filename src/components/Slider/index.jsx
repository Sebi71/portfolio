import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import "./index.scss"
export default function Slider({images, filter, btnRadio, navigate}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideNumber = images.length;

    useEffect(() => {
        const interval = setTimeout(() => {
        setCurrentIndex(currentIndex < slideNumber - 1 ? currentIndex + 1 : 0);
        }, 4000);
        return () => clearTimeout(interval);
    }, [currentIndex, slideNumber]);

  return (
    <div className="slider">
        {images.map((image, index) => (
        currentIndex === index && (
          <img className={` slide slide--${
            currentIndex === index && "display"}`} 
            key={index} 
            src={image} 
            alt="" />)
        ))}
        {filter && (
          <div className="view" onClick={navigate}>
              <h2 className="decover-title">Découvrir mes projets</h2>
          </div>
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
  )
}

Slider.propTypes = {
  images: PropTypes.array,
  filter: PropTypes.bool,
  btnRadio: PropTypes.bool,
  navigate: PropTypes.func
}