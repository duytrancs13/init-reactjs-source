import axios from 'axios';
import { getAccessToken } from './access-token';
const BASE_URL = 'https://daikin-api.3forcom.net/api/v1/';

const http = axios.create({
    baseURL: BASE_URL
})
const httpToken = axios.create({
    baseURL: BASE_URL
})

httpToken.interceptors.request.use(
    config => {
        const token = getAccessToken();
        return {
            ...config,
            headers: {
                ...(token ? { Authorization: `Bearer ${token}` } : {})
            }
        }
    }
)

export const fetchHomePage = async () => {
    const res = await http.get('page/trang-chu');
    return res.data.data;
}

export const login = async (email, password) => {
    const res = await http.post("customer/login", {email, password});
    return res.data.data;
};

export const fetchUserInfo = async () => {
    const res = await httpToken.get("customer/profile");
    console.log(res);
    return res.data.data;
  };

export const updateTokenByRefreshToken = async (refreshToken) => {
const res = await http.post("customer/refresh-token", { refreshToken });
return res.data.data;
};