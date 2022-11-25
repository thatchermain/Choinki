import { useState, React } from "react";
import "./Gallery.css";
import { gallery } from "../data/gallery";
const Gallery = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const showNext = () => {
    currentImg < gallery.length - 1
      ? setCurrentImg(currentImg + 1)
      : setCurrentImg(0);
    console.log(currentImg);
  };

  const showPrev = () => {
    currentImg > 0
      ? setCurrentImg(currentImg - 1)
      : setCurrentImg(gallery.length - 1);
    console.log(currentImg);
  };

  return (
    <div id="gallery" className="gallery">
      <div className="gallery__container">
        <h2>GALERIA</h2>
      </div>
      <div className="gallery__wrapper">
        <div className="main">
          <img src={gallery[`${currentImg}`].src} alt="" />
        </div>
        <div className="extras"></div>
        <div className="controls">
          <button className="btn" onClick={showPrev}>
            Poprzednie
          </button>
          <button className="btn" onClick={showNext}>
            Następne
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
