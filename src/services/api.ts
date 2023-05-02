import axios from "axios"

const api = axios.create({
    baseURL: "https://hamburgueria-json-server-production.up.railway.app",
})

export default api
