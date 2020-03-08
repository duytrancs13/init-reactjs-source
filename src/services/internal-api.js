import axios from 'axios';
const BASE_URL = '';

const http = axios.create({
    baseURL: BASE_URL
})

export const fetchHomePage = async () => {
    const res = await http.get('');
    return res.articles;
}