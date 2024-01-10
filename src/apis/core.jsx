import axios from 'axios';
import TokenRepository from '../repositories/token-repository';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

/**
 * axiosInstance를 사용하는 모든 요청에대해서 저 행위를 한다
 */
// interceptor.response 응답을 가로챔 / request: 요청
// use안에서 axiosInstance의 요청의 설정을 가져온것 -> 요청의 header에 token을 심겠다
axiosInstance.interceptors.request.use(function (config) {
    const token = TokenRepository.getToken();
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

/**
 * config
 * 이 객체는 요청 방법, 헤더, 데이터, URL 및 기타 매개 변수와 같은 정보를 포함합니다.
 */

/**
 * axiosInstance 함수형으로 작성 시
 *
 * 번들 -> 사이즈 줄어듦 ->
 * yarn build
 * 사이즈를 줄이고줄이고 줄여서 사용자에게 필요한 것만 보여주는 것이 번들(빌드사이즈를 줄인 것)
 * 번들 타이밍 : 사용자가 웹사이트를 방문할 때
 * 로그인 안되어있으면 undefined -> 로긍인할 때 값이 안실림
 *
 * axiosInstance = () => 실행형으로 바뀌니까 계속 새로 값을 읽으면서 토큰생성된다.
 *
 *
 */
