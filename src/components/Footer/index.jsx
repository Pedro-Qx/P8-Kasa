import React from "react";
import style from "./footer.module.scss";

const Footer = () =>{
    return(
        <footer className={style.footer}>
        <img src="/assets/LOGO-2.png" alt="Kasa's black Logo" className={style.img}></img>
        <div className={style.pContainer}>
            <p className={style.p}>© 2020 Kasa. All rights reserved</p>
        </div>
        </footer>
    )
}

export default Footer