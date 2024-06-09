import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import "./index.scss"
export default function Slider({title, images, filter, btnRadio, navigate}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideNumber = images.length;

    useEffect(() => {
        const interval = setTimeout(() => {
        setCurrentIndex(currentIndex < slideNumber - 1 ? currentIndex + 1 : 0);
        }, 2500);
        return () => clearTimeout(interval);
    }, [currentIndex, slideNumber]);

  return (
    <>
      <h2 className="slider-title">{title}</h2>
      <div className="slider">
          {images.map((image, index) => (
          currentIndex === index && (
            <img className={` slide slide--${
              currentIndex === index && "display"}`} 
              key={index} 
              src={image} 
              alt=""
              onClick={navigate} />)
          ))}
          {filter && (
            <div className="view">
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
    </>
  )
}

Slider.propTypes = {
  title: PropTypes.string,
  images: PropTypes.array,
  filter: PropTypes.bool,
  btnRadio: PropTypes.bool,
  navigate: PropTypes.func
}