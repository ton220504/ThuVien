import axios from "axios";
const httpAxios = axios.create({
    baseURL:'http://localhost:3030/api/',
    headers: {'X-Custom-Header': 'foobar'}
});
httpAxios.interceptors.response.use((response)=>{
    return response.data;
});
export default httpAxios;