import axios from "axios";

const instance = axios.create({
    baseURL: 'https://63b68cc958084a7af3b56b5d.mockapi.io/api/',
});

export default instance;