import axios from "axios";

export const instanceAxios = axios.create({
    baseURL: "http://localhost:4000"
})

instanceAxios.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)