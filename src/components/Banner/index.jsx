import React from "react";
import style from "./banner.module.scss";
import BgParph from "../Bg-paragraph/";


const Banner = () => {
    return(
        <div className={style.banner}>
            <img src="assets/Image source 1.png" alt="Banner" className={style.bg_pic}></img>
            <BgParph />
        </div>
    )
}

export default Banner