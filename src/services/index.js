import axios from "axios";

function login(user) {
    return axios.post("https://taigamegastore.herokuapp.com/login", user);
}

function getProducts(promotion, category) {
    if(promotion === true) {
        return axios.get(`http://localhost:5000/promotions?category${category}`);
    } else {
        return axios.get(`http://localhost:5000/products${category}`)
    }
}

export { login, getProducts };