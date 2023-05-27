import axios from 'axios';

const Axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 10000,
});

export default Axios;
