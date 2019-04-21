import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnisctak-backend.herokuapp.com',
});

export default api;