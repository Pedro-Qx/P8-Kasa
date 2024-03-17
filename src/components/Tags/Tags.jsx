import React, { useEffect } from "react";
import style from "./tags.module.scss";

const Tags = ({ rental }) => {
  const getTags = rental.tags;

  useEffect(() => {
    const tagsContainer = document.getElementById("tagsContainer");
    tagsContainer.innerHTML = ""; // nétoyer le container avant d'ajouter les nouveaux éléments, sinon ils se dupliquent.
  if(tagsContainer){
    for (let i = 0; i < getTags.length; i++) {
      const tagDiv = document.createElement("div");
      tagDiv.innerText = getTags[i];
      tagDiv.classList.add(style.tag);
      tagsContainer.appendChild(tagDiv);
    }
  }

  }, [getTags]);


  return (
    <div id="tagsContainer" className={style.tagsContainer}></div>
  );
};

export default Tags;
