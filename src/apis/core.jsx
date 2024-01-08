import axios from 'axios';
import TokenRepository from '../repositories/token-repository';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        // token 종류 (JWT) => Bearer
        Authorization: `Bearer ${TokenRepository.getToken()}`,
    },
    // withCredentials: true,
});
