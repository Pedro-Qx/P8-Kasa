import React from "react";
import style from "./host.module.scss"

const Host = ({rental}) => {
    //diviser le nom du hôte
    const getHostName = rental.host.name;
    const division = getHostName.split(" ");
    const name = division[0]
    const lastname = division[1]

    return (
        <div className={style.host}>
            <p className={style.hostName}>{name}<br />{lastname}</p>
            <div className={style.hostPhContainer}>
                <img src={rental.host.picture} className={style.hostPh} alt={rental.host.name}></img>
            </div>
        </div>
    )

}
export default Host

