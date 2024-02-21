import axios from 'axios';
import TokenRepository from '../repositories/token-repository';

export const axiosInstance = axios.create({
    baseURL: `https://topdragon.co.kr/`,
    withCredentials: true,
    // header에 authorization이 있는 항목을 요청할 때
});

axiosInstance.interceptors.request.use(function (config) {
    const token = TokenRepository.getToken();
    console.log(token);
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

/**
 * withCredentials: true는 XMLHttpRequest나 Fetch API를 사용하여 서버로 HTTP 요청을 보낼 때,
 * 해당 요청에 인증 정보(credentials)를 포함시키도록 지정하는 옵션입니다.
 * 이 옵션을 사용하는 이유는 주로 Cross-Origin 요청 시에 쿠키와 같은 인증 정보를 함께 전송하기 위함입니다.
 */
