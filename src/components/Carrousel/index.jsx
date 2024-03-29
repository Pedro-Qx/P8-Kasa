import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import style from "./carrousel.module.scss";
import { useState } from "react";


const Carrousel = ({ rental }) => {
  const pictures = rental.pictures;

  const [handelClick, setHandelClick] = useState(0);
  
  const right = () => {
    setHandelClick(clickL => {
      if (clickL >= pictures.length - 1) {
        return 0;
      }
      return clickL + 1;
    });

  };

  const left = () => {
    setHandelClick(clickL => {
      if (clickL <= 0) {
        return pictures.length - 1;
      }
      return clickL - 1;
    });
  };

  let handelNumber = handelClick + 1;
  let totalPics = pictures.length;
  const showArrow = pictures.length;

  return (
    <div className={style.carrouselContainer}>
      {showArrow > 1 ? (
        <>
          <img id="carrouselPics" src={pictures[handelClick]} alt={rental.title} className={style.carrPictures}></img>
          <div className={style.arrowsContainer}>
            <FontAwesomeIcon id="leftIcon" icon={faChevronLeft} onClick={() => left()} className={`${style.arrows} ${style.arrowLeft}`}></FontAwesomeIcon>
            <FontAwesomeIcon id="rightIcon" icon={faChevronRight} onClick={() => right()} className={`${style.arrows} ${style.arrowRight}`}></FontAwesomeIcon>
          </div>
          <p id="counter" className={style.counter}>{handelNumber}/{totalPics}</p>
        </>
      ) : (
        <img id="carrouselPics" src={pictures[0]} alt={rental.title} className={style.carrPictures}></img>
      )}
    </div>
  );
};

export default Carrousel;



/*let n = 0;

  function right() {
    n++;
    if (n >= pictures.length) {
      n = 0;
    }
    const carrousel = document.getElementById("carrouselPics");
    carrousel.src = pictures[n];
  }

  function left() {
    n--;
    if (n < 0) {
      n = pictures.length - 1;
    }

    const carrousel = document.getElementById("carrouselPics");
    carrousel.src = pictures[n];
  }*/