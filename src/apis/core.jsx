import axios from 'axios';

export const axiosInstance = () =>
    axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        headers: {
            // token 종류 명시 필수 (json web token(JWT) => Bearer)
            Authorization: `Bearer ${import.meta.env.VITE_BACKEND_URL}`,
        },
        withCredentials: true,
    });
