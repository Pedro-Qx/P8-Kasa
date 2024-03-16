import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import style from "./displaycollaps.module.scss";
import { useState } from 'react';

const DisplayCollaps = ({princps, rental, descrip, equip}) => {
    const [rotated, setRotated] = useState(false);

    const toggleRotation = () => {
        setRotated(!rotated);
    };

    let descripContent;
    
    if (equip) {
        descripContent = rental.equipments.map((eq, index) => (
            <p key={index} className={style.descriptLog}>{eq}</p>
            
        ));
    } else if (princps) {
        descripContent = <p className={style.descript}>{princps.content}</p>;
    } else {
        descripContent = <p className={style.descript}>{rental.description}</p>;
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