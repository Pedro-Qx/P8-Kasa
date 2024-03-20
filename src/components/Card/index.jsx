import React from "react";
import style from "./card.module.scss"

const Card = ({rentls}) => {
    
    return (
           <div className={style.card}>
               <img className={style.img} src={rentls.cover} alt={rentls.title}></img>
               <div className={style.filterGrad}></div>
               <p className={style.p}>{rentls.title}</p>
           </div>

            )
};

export default Card