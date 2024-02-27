import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FetchRentals from "../../utils/context/FetchRentals";
//import DisplayCollaps from "../../components/DisplayCollaps/index";

const Logement = ()=>{
    const {logementId} = useParams();
    
    const [rentals, setrentals] = useState([]);

    useEffect( () => {
        FetchRentals()
            .then((resp) => {
                setrentals(resp)
            })
    }, [])

    const logement = rentals.find((logement) => logement.id === logementId)
    console.log (logement)
    
    return (
        <div>
            {/*<div>
                <img alt="hello"></img>
                <i></i>
                <i></i>
            </div>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
*/}
        </div>
    )
}

export default Logement

/*
                            <div>
                                <div>
                                    codigo estrellas
                                </div>
                                <div>{rental.host}</div>
                            </div>
                            <DisplayCollaps/>
                            <DisplayCollaps/>
                            */
                        