import React from "react";
import Banner from "../../components/Banner";
import ItemListContainer from "../../components/ItemsContainer"
import style from "./home.module.scss"


const Home = ({rentals})=>{
    const homePicSrc = "assets/Image source 1.png";
    return (
        <div className={style.items_container}>
            <Banner  homeBgPic={homePicSrc}/> 
            <ItemListContainer rentals={rentals}/>
        </div>
    )
}

export default Home