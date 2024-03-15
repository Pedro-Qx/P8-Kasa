import data from './BackendKasa.json'

const FetchIdRentals = () =>{
    new Promise((resolve, reject) =>{
        const rental = data.find((card)=>card.id === id)
        if (rental){
            resolve(rental)

        }else{
            reject({
            error:"un problème est survenu lors de la recherche du logement"
            })

        }
    })
}

export default FetchIdRentals