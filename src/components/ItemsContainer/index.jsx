import React from "react";
import FetchRentals from "../../utils/context/FetchRentals";
import { useEffect, useState } from "react";
import Card from "../Card";
import style from "./itemsContainer.module.scss"

const ItemListContainer =()=>{
    const [rentals, setrentals] = useState([]);

    useEffect(() => {
        FetchRentals()
            .then((resp) => {
                setrentals(resp)
            })

    }, [])

    return (
        <div className={style.item_list_container}>

            {
                rentals.map((rental) => {
                    return (
                        <Card key={rental.id} rentls={rental} />
                    )
                })
            }

        </div>
    )
};

export default ItemListContainer;