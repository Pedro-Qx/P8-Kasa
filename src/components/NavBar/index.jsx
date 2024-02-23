import React from "react";
import { Link } from "react-router-dom";
import style from "./navBar.module.scss"

const NavBar = () =>{
    return(
        <nav className={style.nav_bar}>
            <img className="headerLogo" src="/assets/LOGO.png" alt="Kasa's red Logo"></img>
            <ul className={style.menu}>
                <Link to="/" className={style.menu_link}><li>ACCUEIL</li></Link>
                <Link to="/Apropos" className={style.menu_link}><li>À PROPOS</li></Link>
            </ul>
        </nav>
    )
}

export default NavBar