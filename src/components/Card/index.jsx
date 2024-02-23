import React from "react";
import style from "./card.module.scss"

const Card = ({rentls}) => { //desestructuration de l'objet titre = props.titre
    
    return (
           <div className={style.card}>
                <img className={style.img} src={rentls.cover} alt={rentls.title}></img>
                <p className={style.p}>{rentls.title}</p>
           </div>

            )
};

export default Card