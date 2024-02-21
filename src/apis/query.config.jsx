const QueryConfig = {
    staleTime: 0,
    cacheTime: 5000,
    refetchOnMount: 'always',
};

export default QueryConfig;

/**
 * staleTime 유통기한 기본값: 0
리액트는 데이터를 항상 신선하지않다고 판단
신선하지않다 = 그 데이터를 재요청한다

get으로 받아온데이터가
자주 바뀌지않는 데이터라면? -> 불필요한 데이터를 재요청 — 의도적으로 개발자가 staleTime을 늘린다

cacheTime 기본값: 5분
가비지콜렉터로 넘어감 또다시 재요청 

(staleTime < cacheTime
cacheTime은 절대적. 리패칭하게됨 더 크게되면..
동시에 부여하게될때)staleTime 유통기한 기본값: 0
 */
