import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import FetchRentals from "../../utils/context/FetchRentals";

//si pictures sòlo tiene una foto, las felechas desaparecen

//en img debo llamar a cover, y con click debo hacer que pase de objeto uno en uno.

const Carrousel = ()=>{
    const [rentalPics, setRentalPics]=useState([])
    useEffect(()=>{
        FetchRentals()
            .then((res)=>{
                const pictures = res.map((rental)=>rental.pictures)
                setRentalPics(pictures)
            })
    },[])
    
//tengo que poner en la src la iimagen que corresponde al elemento elegido.

    let n=0
    function right() {
        n++
        if (n >= rentalPics.length) {
            n = 0
        }
        const imgCarrousel = document.getElementById("carrouselPics");
        imgCarrousel.src = rentalPics[n] 
        
    }
    
    function left() {
        n--
        if (n < 0) {
            n = rentalPics.length - 1
        }
        
        const imgCarrousel = document.getElementById("carrouselPics");
        imgCarrousel.src = rentalPics[n]
    }

    return (
        <div>
            {
                rentalPics.map((pic) => {
                    return (
                        <div>
                            <img id="carrouselPics" src={rentalPics[0]} alt=""></img>
                            <FontAwesomeIcon icon={faChevronLeft} onClick={()=>left()}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faChevronRight} onClick={()=>right()}></FontAwesomeIcon>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Carrousel
/*módulo>
    logement
    el cover que inserto en img tiene que ser el mismo de cada página. Para ello >>
    cuando hago click debo cambiar la src de cover

onClick={() => setClick(false)}

llamo al backend
hago el map y defino que img muestre el


El numero id del elemento del array se lo 

props > le puedo pasar a mi img src en props el elemento del array que tiene que mostrar (index) y luego especificar que necesito el objeto "pictures".

luego tengo que decirle que si pictures.length es =< 1 no muestre las flechas.

/////////

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await FetchRentals();
      setDataRentals(res);

      // Extraer pictures y names
      const picturesArray = res.map((rental) => rental.pictures);
      const namesArray = res.map((rental) => rental.host.name);

      setPictures(picturesArray);
      setNames(namesArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();

}, []);




*/
    
