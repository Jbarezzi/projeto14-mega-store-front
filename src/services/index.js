import axios from "axios";

function login(user) {
    return axios.post("http://localhost:5000/login", user);
}

function getProducts(promotion) {
    if(promotion === true) {
        return axios.get("http://localhost:5000/promotions");
    } else {
        return axios.get("http://localhost:5000/products")
    }
}

export { login };