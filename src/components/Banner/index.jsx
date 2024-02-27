import React from "react";
import style from "./banner.module.scss";

const Banner = ({bannerPic, className}) => {
    return(
        <img src={bannerPic} alt="Paysage" className={`${style.banner} ${className}`}></img>
    )
}

export default Banner
