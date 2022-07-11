import axios from "axios";

function login(user) {
    return axios.post("https://taigamegastore.herokuapp.com/login", user);
}

export { login };