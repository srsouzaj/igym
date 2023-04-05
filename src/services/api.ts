import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.1.101:3333'
});


api.interceptors.response.use((response) => {
    console.log("INTERCEPTOR =>", response)
    return response
}, (error) => {
    console.log('INTERCEPTOR RESPONSE ERROR =>', error)
    return Promise.reject(error);
})

export { api };