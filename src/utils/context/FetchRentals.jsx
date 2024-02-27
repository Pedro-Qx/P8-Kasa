import data from "./BackendKasa.json";

const FetchRentals = () => {
    return new Promise((resolve, reject) =>{ //je fais une promèse et je la résous 
        resolve(data)
    })
}

export default FetchRentals