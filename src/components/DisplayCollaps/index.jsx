import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import style from "./displaycollaps.module.scss";
import { useState } from 'react';
//princps: info concernant les principes identitaires de Kasa pour le composant Apropos.
//rental: info dynamique de l'appartement clické sur Home.
//descrip: titre du collaps qui s'affiche sur Logement
//equip: titre du collaps qui s'affiche sur logement 

const DisplayCollaps = ({princps, rental, descrip, equip}) => {
    const [rotated, setRotated] = useState(false);

    const toggleRotation = () => {
        setRotated(!rotated); //inversion de la valeure booléenne de rotated.
    };

    let descripContent; //variable indéfinie.
    
    if (equip) {
        //Création de l'array dscriptContent qui contient différents objets.
        descripContent = rental.equipments.map((eq, index) => (
            <p key={index} className={style.descriptLog}>{eq}</p>
        ));
    } else if (princps) {
        descripContent = <p className={style.descript}>{princps.content}</p>;
    } else {
        descripContent = <p className={style.descriptLog}>{rental.description}</p>;
    }

    return (
        <div className={`${princps && style.display_collaps} ${rental && style.display_collapsLog}`}>
            <div className={`${princps && style.collaps} ${rental && style.collapsLog}`}>
                <p className={style.title}>{princps && princps.title} {descrip && descrip} {equip && equip}</p>
                <FontAwesomeIcon
                    icon={faChevronUp}
                    className={`${style.icon} ${rotated ? style.iconAnim : style.iconBackAnim}`}
                    onClick={toggleRotation}
                />
            </div>
            <div id="descripTxt" className={rotated ? style.displayOn : style.displayOff}>
                <div className={style.contDescriptLog}>
                {descripContent}
                </div>
            </div>
        </div>
    );
};

export default DisplayCollaps;