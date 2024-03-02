import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import style from "./displaycollaps.module.scss"
import { useState } from 'react';

const DisplayCollaps = ({ kasaPps }) => {
   console.log(kasaPps)

    const [rotated, setRotated] = useState(false);

    const toggleRotation = () => {
        setRotated(!rotated)
    }
    return (
        <div className={style.display_collaps}>
            <div className={style.collaps}>
                <p className={style.title}>{kasaPps.title}</p>
                <FontAwesomeIcon icon={faChevronUp}
                    className={`${style.icon} ${rotated ? style.iconAnim : style.iconBackAnim}`} onClick={toggleRotation} />
            </div>
            <div className={rotated ? style.displayOn : style.displayOff}>
                <p className={style.descript}>{kasaPps.content}</p>
            </div>
        </div>
    );
}
export default DisplayCollaps

