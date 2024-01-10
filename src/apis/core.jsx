import axios from 'axios';
import TokenRepository from '../repositories/token-repository';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

/**
 * axiosInstance를 사용하는 모든 요청에대해서 저 행위를 한다
 */
// interceptor.response 응답을 가로채고 / request: 요청
axiosInstance.interceptors.request.use(function (config) {
    const token = TokenRepository.getToken();
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

/**
 * 이 메커니즘을 사용하여 헤더를 추가하거나, 요청 데이터를 수정하거나,
 * 요청을 보내기 전에 필요한 다른 논리를 수행할 수 있습니다.
 * 이것은 애플리케이션의 여러 요청에 걸쳐 특정 행동을 균일하게 적용해야 하는 시나리오에 대한 강력한 기능입니다.
 */

/**
 * config
 * 이 객체는 요청 방법, 헤더, 데이터, URL 및 기타 매개 변수와 같은 정보를 포함합니다.
 */
