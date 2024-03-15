import React, { useEffect } from "react";
import style from "./tags.module.scss";

const Tags = ({ rental }) => {
  const getTags = rental.tags;

  useEffect(() => {
    const tagsContainer = document.getElementById("tagsContainer");
    tagsContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos elementos, si no se duplican.

    for (let i = 0; i < getTags.length; i++) {
      const tagDiv = document.createElement("div");
      tagDiv.innerText = getTags[i];
      tagDiv.classList.add(style.tag);
      tagsContainer.appendChild(tagDiv);
    }
  }, [getTags]); // Este efecto solo se ejecutará cuando getTags cambie

  return (
    <div id="tagsContainer" className={style.tagsContainer}></div>
  );
};

export default Tags;
