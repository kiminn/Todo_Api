import { createContext, useEffect, useState } from 'react';
import TokenRepository from '../repositories/token-repository';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const token = TokenRepository.getToken();
        if (token) {
            setAccessToken(token);
        }
    }, []);

    const signIn = async (token) => {
        TokenRepository.setToken(token);
        setAccessToken(token);
    };
    const signOut = async () => {
        const res = await AuthApi.signOut();
        TokenRepository.removeToken();
        setAccessToken(null);
    };

    return <AuthContext.Provider value={{ accessToken, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
