import React from "react";
import style from "./stars.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Stars = ({ rental }) => {
  const starsRating = 5;
  const starsRat = rental.rating;

  // Transformer le chiffre dans un array d'icônes étoiles.
  const starIcons = Array.from({ length: starsRating }).map((_, index) => {
    const starClassName =
      index + 1 <= starsRat ? `${style.star} ${style.redstar}` : `${style.star} ${style.greystar}`;

    return <FontAwesomeIcon key={index} icon={faStar} className={starClassName} />;
  });

  return (
    <div className={style.starsRating}>
      {starIcons}
    </div>
  );
};

export default Stars;
