import { useMutation, useQueryClient } from 'react-query';

// 서버의 데이터를 수정하는 경우 mutate사용
// successFn: Call the success callback function
const useMutateData = (mutateFn, queryKey, successFn) => {
    const queryClient = useQueryClient();

    // mutateFn: 필수이지만 기본 돌연변이 함수가 정의되지 않은 경우에만 해당 비동기 작업을 수행하고 약속을 반환하는 함수입니다.
    return useMutation(mutateFn, {
        // 함수 실행 전 실행. 낙관적 업데이트에 유용 롤백가능
        onMutate: () => {},
        // 쿼리가 성공적으로 데이터를 가져왔을 때 실행할 콜백함수
        onSuccess: (res) => {
            queryClient.invalidateQueries(queryKey);
            successFn();
        },
        onError: () => {
            console.error('error');
        },
        // 쿼리 완료 시 (성공, 실패 포함)
        onSettled: () => {},
    });
};

export default useMutateData;
