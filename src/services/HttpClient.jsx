import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_URL_BASE

axios.interceptors.request.use(config => {
    const token_security = window.localStorage.getItem('token');

    if(token_security){
        config.headers.Authorization = 'Bearer ' + token_security;
        return config
    }

}, err => {
    return Promise.reject(err);
});

const requestGeneric = {
    get: url => axios.get(url),
    post: (url, body) => axios.post(url,body),
    put: (url, body) => axios.put(url,body),
    delete: url => axios.delete(url)
}

export default requestGeneric