import React from "react";
//import { useEffect, useState } from "react";

import Card from "../Card";
import style from "./itemsContainer.module.scss"
import { Link } from "react-router-dom";

const ItemListContainer =({rentals})=>{
    
    return (
        <div className={style.item_list_container}>

            {
                rentals.map((rental) => {
                    return (
                        <Link to={`/logements/${rental.id}`} key={rental.id} className={style.linksLogements}> <Card rentls={rental} /> </Link>
                    )
                })
            }

        </div>
    )
};


export default ItemListContainer;