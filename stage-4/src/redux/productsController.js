import axios from "axios";

export const getAllProducts = function() {
  return axios
    .get("https://practiceapi.devmountain.com/products/")
    .then(response => response.data);
};

//why can't we use export default getAllProducts???????????
