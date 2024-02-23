import React from "react";
import style from "./footer.module.scss";

const Footer = () =>{
    return(
        <footer className={style.footer}>
        <img src="/assets/LOGO-2.png" alt="Kasa's black Logo"></img>
        <p className={style.p}>© 2020 Kasa. All<br></br>rights reserved</p>
        </footer>
    )
}

export default Footer