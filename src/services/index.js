import axios from "axios";

function login(user) {
    return axios.post("https://taigamegastore.herokuapp.com/login", user);
}

function getProducts(promotion, category) {
    if(promotion === true) {
        return axios.get(`https://taigamegastore.herokuapp.com/promotions?category${category}`);
    } else {
        return axios.get(`https://taigamegastore.herokuapp.com/products${category}`)
    }
}

export { login, getProducts };