import { axiosInstance } from './core';

const PATH = '/todo/user/';

const AuthApi = {
    async signUp(email, pw) {
        const res = await axiosInstance.post(PATH + '/sign-up', {
            email,
            pw,
        });
        return res.data;
    },

    async signIn(email, pw) {
        const res = await axiosInstance.post(PATH + '/sign-in', {
            email,
            pw,
        });
        console.log(response.data);
        return res.data;
    },

    async signOut() {
        const res = await axiosInstance.post(PATH + '/sign-out');
        return res.data;
    },
};

export default AuthApi;
