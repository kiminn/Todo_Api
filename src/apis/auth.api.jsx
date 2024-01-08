import { axiosInstance } from './core';

const PATH = '/todo/user';

const AuthApi = {
    async signUp(email, password) {
        // 500에러
        console.log(email, password);
        const res = await axiosInstance.post(PATH + '/sign-up', {
            email,
            pw: password,
        });
        console.log(res);
        return res.data;
    },

    async signIn(email, password) {
        console.log(email, password);
        const res = await axiosInstance.post(PATH + '/sign-in', {
            email,
            pw: password,
        });
        return res.data;
    },

    async signOut() {
        const res = await axiosInstance.post(PATH + '/sign-out');
        return res.data;
    },
};

export default AuthApi;
