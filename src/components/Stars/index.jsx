import React, { useEffect } from "react";
import style from "./stars.module.scss";

const Stars = ({ rental }) => {
  const starsRating = 5;
  const starsRat = rental.rating;
  
  useEffect(() => {
    const getStarIcons = document.getElementById("starContainer");
    getStarIcons.innerHTML = "";

    for (let index = 0; index < starsRating; index++) {
      const starIcon = document.createElement("i");
      starIcon.classList.add(style.star,"fa-solid", "fa-star");
      
      // Asigna la clase "redstar" a las primeras starsRat estrellas
      if (index + 1 <= starsRat) {
        starIcon.classList.add(style.redstar);
      } else {
        // Asigna la clase "greystar" a las estrellas restantes
        starIcon.classList.add(style.greystar);
      }
      
      getStarIcons.appendChild(starIcon);
    }

  }, [starsRat, starsRating]);

  return (
    <div id="starContainer" className={style.starsRating}>
     
    </div>
  );
};

export default Stars;