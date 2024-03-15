import React, { useEffect, useState } from "react"
import style from "./stars.module.scss"

const Stars = ({ rental }) => {
  const starsRating = 5;
  const starsRat = rental.rating;

  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    if (!rendered) {

      const getStarIcons = document.getElementById("starContainer")
      getStarIcons.innerHTML = "";

      for (let index = 0; index < starsRating; index++) {
        let starIcon = document.createElement("i");
        starIcon.classList.add(style.star)
        starIcon.classList.add("fa-solid")
        starIcon.classList.add("fa-star")
        getStarIcons.appendChild(starIcon);
        // Asigna la clase "redstar" a las primeras starsRat estrellas
        if (index + 1 <= starsRat) {
          starIcon.classList.add(style.redstar);
        } else {
          // Asigna la clase "greystar" a las estrellas restantes
          starIcon.classList.add(style.greystar);
        }
      }

    }

    setRendered(true)

  }, [rendered, starsRat]);

  return (
    <div id="starContainer" className={style.starsRating}></div>
  )
}

export default Stars;