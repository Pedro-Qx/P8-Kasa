import React from "react";
import { useState } from "react";
import Carrousel from "../../components/Carrousel";
import DisplayCollaps from "../../components/DisplayCollaps/index";

const Logement = ()=>{
    const [rentals, setrentals] = useState([])
            
    return (
        <div>
                     
           <Carrousel rentals={rentals} setrentals={setrentals} />
           <DisplayCollaps rentals={rentals} setrentals={setrentals} />
           
        </div>
    )
}

export default Logement


                        