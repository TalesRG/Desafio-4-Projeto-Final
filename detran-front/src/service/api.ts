import axios from "axios";
import toast from "react-hot-toast";


export const httpClient = axios.create({
    baseURL : 'http://localhost:3001'
})

httpClient.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem("access_token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            window.location.href = "/";
            toast.error('Erro no login');
        }
        return Promise.reject(error);
    }
);

