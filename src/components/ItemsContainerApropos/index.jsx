import React from "react";
import FetchAbList from "../../utils/context/FetchAbList"
import { useEffect, useState } from "react";
import DisplayCollaps from "../DisplayCollaps";
import style from "./itemscontainer.module.scss"

const ItemsContainerApropos =()=>{
    const [principes, setprincipes] = useState([]);

    useEffect(() => {
        FetchAbList()
            .then((resp) => {
                setprincipes(resp)
            })
    }, [])
    
    return (
        <div className={style.collaps_container}>
            {
                principes.map((principe) => {
                    console.log(principe)
                    return (
                        <DisplayCollaps key={principe.title} kasaPps={principe} />
                    )
                })
            }
        </div>
    )
}

export default ItemsContainerApropos