import data from "./BackendKasa.json";

const FetchRentals = () => {
    return new Promise((resoleve, reject) =>{ //je fais une promèse et je la résous 
        resoleve(data)
    })
}

export default FetchRentals