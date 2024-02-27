//import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import style from "./displaycollaps.module.scss"
import { useState } from 'react';

const DisplayCollaps = ({princps}) =>{
    
    const [rotated, setRotated] = useState(true);

    return rotated ? (

        <div className={style.display_collaps}>
            <div className={style.collaps}>
                <p className={style.title}>{princps.title}</p>
                <FontAwesomeIcon icon={faChevronUp} className={`${style.icon} ${style.iconBackAnim}`} onClick={() => setRotated(false)} />
            </div>
            <div className={style.display}>
                <p className={`${style.descript} ${style.deployBack}`}>{princps.content}</p>
            </div>
        </div>


    ) : (
        <div className={style.display_collaps}>
            <div className={style.collaps}>
                <p className={style.title}>{princps.title}</p>
                <FontAwesomeIcon icon={faChevronUp} className={`${style.icon} ${style.iconAnim}`} onClick={() => setRotated(true)} />
            </div>
            <div className={style.display}>
                <p className={`${style.descript} ${style.deploy}`}>{princps.content}</p>
            </div>

        </div>

    )
}

export default DisplayCollaps


//yo hago click en el botón, entonces aplico la clase iconAnim/ si hago click de vuelta

/*  */        

        