import axios from "axios";

const http = axios.create({
    baseURL: 'https://ravshandev.pythonanywhere.com/api',
})

http.interceptors.request.use(
    (config) => {
        config.headers["Authorization"] = 'Basic YWRtaW46MTIz';
        config.headers["Accept"] = "application/json";
        return config;
    },
    (error) => Promise.reject(error)
);

export default http;