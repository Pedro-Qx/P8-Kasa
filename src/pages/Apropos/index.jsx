import React from "react";
import Banner from "../../components/Banner";
import ItemsContainerApropos from "../../components/ItemsContainerApropos";
import style from "../Apropos/apropos.module.scss";


const Apropos = ()=>{
    const picSrc = "assets/Image source 2.png";
    return (
        <div className={style.aprop_container}>
            <div className={style.bannerContainer}>
            <Banner bannerPic={picSrc} className={style.banner}/>
            <div className={style.pic_filter}></div>
            </div>
            <ItemsContainerApropos />
        </div>
    )
}

export default Apropos