import React from "react";
import Banner from "../../components/Banner";

import ItemListContainer from "../../components/ItemsContainer"
import style from "./style.module.scss"

const Home = ()=>{
    return (
        <div className={style.items_container}>
            <Banner />
            
            <ItemListContainer />
        </div>
    )
}

export default Home