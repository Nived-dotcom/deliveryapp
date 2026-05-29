import axios from "axios";

const api = axios.create({
  baseURL: "http://10.150.99.94:4000/api",
});

export default api;