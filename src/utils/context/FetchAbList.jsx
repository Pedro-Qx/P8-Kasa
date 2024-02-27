import Data from "./AboutList.json";

const FetchAbList = () => {
  return new Promise((resolve, reject) => {
    resolve(Data);
  });
};

export default FetchAbList;
