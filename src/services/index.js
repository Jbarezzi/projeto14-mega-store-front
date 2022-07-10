import axios from "axios";

function login(user) {
    return axios.post("http://localhost:5000/login", user);
}

export { login };