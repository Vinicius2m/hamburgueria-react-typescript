import axios from "axios"

const api = axios.create({
    baseURL: "https://json-hamburgueria-server.herokuapp.com",
})

export default api
