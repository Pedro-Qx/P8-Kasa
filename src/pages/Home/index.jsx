import React from "react";
import Banner from "../../components/Banner";
import ItemListContainer from "../../components/ItemsContainer"
import style from "./home.module.scss"
import BgParph from "../../components/Bg-paragraph";

const Home = ({rentals})=>{
    const picSrc = "assets/Image source 1.png";
    return (
        <div className={style.items_container}>
            <div className={style.banner}>
                <Banner className={style.bg_pic} bannerPic={picSrc}/> 
                <BgParph />
            </div>
            <ItemListContainer rentals={rentals}/>
        </div>
    )
}

export default Home