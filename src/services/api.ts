import axios from "axios"

const api = axios.create({
  baseURL: 'https://hamburgueria-json-server.onrender.com',
});

export default api
