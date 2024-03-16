import React from "react";
import { useState, useEffect } from "react";
import Carrousel from "../../components/Carrousel";
import ErrorPage from "../../components/ErrorPage";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Stars from "../../components/Stars/index";
import { useParams } from "react-router-dom";
import DisplayCollaps from "../../components/DisplayCollaps/index";
import style from "./logement.module.scss";


const Logement = ({rentals})=>{
    const { id } = useParams();

    const [selectedRental, setSelectedRental] = useState(null);

    useEffect(() => {
        // Filtrer l'array rentals pour obtenir l'élément clické sur home en utilisant son id.
        const rental = rentals.find((rental) => rental.id === id);
        // Si l'élement est retrouvé, l'état s'actualise.
        if (rental) {
          setSelectedRental(rental);
        }
      }, [id, rentals]);
    
      
    return (
        <div className={style.logementContainer}>
            {selectedRental ? (
                <div >
                    <Carrousel rental={selectedRental} />
                    
                    <div className={style.oposition}>
                        <div className={style.ttl_loc_tag}>
                            <h2 className={style.h2title}>{selectedRental.title}</h2>
                            <p className={style.location}>{selectedRental.location}</p>
                            <div>
                                <Tags rental={selectedRental}/>
                            </div>
                        </div>
                    
                    <div className={style.host_stars}>
                        <Host className={style.host} rental={selectedRental}/>
                        <Stars className={style.stars} rental={selectedRental}/>
                    </div>
                    
                    </div>
                    <div className={style.display_collaps}>                
                        <DisplayCollaps rental={selectedRental} descrip="Description"/>
                        <DisplayCollaps rental={selectedRental} equip="Équipements"/>
                    </div>
                </div>
            ) : (
                <ErrorPage />
            )
            }
        </div>
    )
}

export default Logement


                        