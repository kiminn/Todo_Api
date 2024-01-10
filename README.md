# todoApi

(2) todo api⇨ react-query활용하여 login - signUp, crud ⇨ access_token, refresh_token

### checkList

1. 나는 react-query의 staleTime과 cacheTime의 역할에 대하여 인지하고 있다.
2. 나는 react-query의 mutate, mutateAsync, useQuery를 사용할 수 있다.
3. 나는 reacy-query의 getQueryData와 setQueryData를 사용할 수 있다.
4. 나는 react-query의 onMutate와 setQueryData를 활용하여 optimistic update를 할 수 있다.
5. 나는 react-hook-form을 활용하여 form의 invalidate를 할 수 있다.
6. 나는 axios의 instance를 생성하고, 인증 토큰과 리프레쉬 토큰을 통한 토큰 재발급을 할 수 있다.

### requirements

(1) ** 가장 먼저 재사용 및 상태 최적화를 고려하여 폴더 구조를 고민하기 **

-   기존에 있던 수업자료는 다양한 학습 과정을 담기 위해 폴더 구조를 과장했어요!
-   정말 필요에 따라 나누어 폴더 구조를 먼저 생각 해봐야해요 :)

(2) ** RHF와 yup을 활용하여 회원가입, 로그인을 구현해야해요 **

-   email에는 email 양식을 보여줘야해요!
-   password는 특수문자가 반드시 포함되어야해요!
-   에러 메세지를 반드시 실시간으로 표시해줘야해요!
-   유효성 검사가 되지 않았다면 버튼이 disabled 되어야해요!

(3) ** react-query를 활용하여 캐싱 되어있는 것을 꼭 확인해야해요! ** - staleTime 값을 0이었을 때, 아니었을 떄를 설정해서 캐싱이 뭔지 확인해야해요!

-   todo가 추가되었을 때 캐싱되어 데이터가 재호출되지 않는 것을 경험 해야하고 해소해야해요!

(4) ** todo의 완료 상태를 바꿨을 때는 반드시 낙관적 업데이트(optimistic-update)를 해봐요 **
(5) ** access_token, refresh_token을 이용해서 인증 로직을 구현해야해요 **

### try, catch문으로 에러핸들링하기 - 동기적으로 작동(순서O)

try..catch를 이용하면 런타임 에러를 처리할 수 있습니다. try에선 코드를 실행하고, 에러가 발생하면 catch에서 잡아냅니다.

문법은 다음과 같습니다.

```
try {
  // 이곳의 코드를 실행
} catch(err) {
  // 에러가 발생하면, 여기부터 실행됨
  // err는 에러 객체
} finally {
  // 에러 발생 여부와 상관없이 try/catch 이후에 실행됨
}
```

### finally는 실행 결과에 상관없이 실행을 완료하고 싶을 경우 사용됩니다.

ex) 작업의 실패와 성공여부에 상관없이 초기화시켜야할때?

<br/>

에러 객체엔 다음과 같은 프로퍼티가 있습니다.

-   message – 사람이 읽을 수 있는 형태의 에러 메시지
-   name – 에러 이름을 담은 문자열 (에러 생성자 이름)
-   stack – 표준이 아니지만 대부분의 호스트 환경이 지원하는 프로퍼티로 에러가 발생한 순간의 스택을 나타냄

---

> colocation이란?
> input 요소가 여러 개일 때, 한 input의 유효성 상태 변경 때문에 모든 컴포넌트가 리렌더링 될 필요는 없습니다.
> 리렌더링 필요한 상태만 분리하여, 리렌더링되는 범위를 좁히는 방법이 많이 쓰입니다.
> 이런식으로 컴포넌트의 상태를 서로 관련이 있는 것들끼리만 모아 분리하여 위치시키는 방법을 state colocation이라고 합니다.

useFormState 훅으로부터 받은 errors 객체를 이용해 각 섹션마다 에러가 있는지 확인

yupResolver: yup 라이브러리의 스키마 유효성 검사를 react-hook-form과 통합
handleSubmit 함수는 2가지 인자를 전달받는데요.
2가지 중 첫 번째가 사용자가 에러가 없는 form을 제출했을 때, 즉 유효성 검사를 통과 후 submit 할 때 실행되는 함수입니다.
yup.object를 선언하여 키(검사할 속성): 값(유효성 로직)을 schema에 담아준다.
object나 shape()을 사용할 경우 해당하는 모든 조건이 맞아야 유효성 검사를 통과하게 됨으로 주의할 것!
https://velog.io/@yesoryeseul/react-hook-formController-yup%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC%ED%95%98%EA%B8%B0

---

AuthApi </br>

-   context

context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있습니다.
context는 React 컴포넌트 트리 안에서 전역적(global)이라고 볼 수 있는 데이터를 공유
=> 데이터로는 현재 로그인한 유저, 테마, 선호하는 언어 등이 있습니다

-   accessToken을 왜 state로 관리 하는가

웹 스토리지는 state가 아니므로, 로그인 로그아웃이 새로 고침이나 페이지 이동 없이
UI 변동을 일으키기 위함

-   useMemo

https://react.dev/reference/react/useMemo#skipping-re-rendering-of-components



---

### 낙관적 업데이트
https://tanstack.com/query/v4/docs/react/guides/optimistic-updates
</br>
요청이 성공할 것이라고 낙관적으로 보고 화면을 먼저 갱신한 다음 서버에 요청을 보내는 것이다. 
</br>
낙관적 업데이트: 사용자 요청 → 화면 갱신 → 서버에 수정 요청 (실패 시 이전 상태로 되돌리기) </br>
비관적 업데이트: 사용자 수정 요청 → 서버에 수정 요청 → 성공하면 화면 갱신
</br>
낙관적 업데이트는 사용자의 경험을 존중하기 위해 실시간 업데이트가 필요하거나, 요청이 실패되어도 위험도가 낮은 좋아요 버튼과 같은 것들에 주로 사용된다. </br>
ex) 메시지 전송, 좋아요, 즐겨찾기, 투두리스트 체크, 장바구니 담기, 게시글 비공개, 파일 업로드, 북마크 </br>

이러한 기능들의 공통점은, 모두 기존의 데이터에 업데이트(mutate)를 일으킨다는 점입니다. 사용자의 동작에 따라 발생한 데이터 업데이트는, 지연 시간(latency) 없이 즉각적인 피드백을 화면에 띄워야 사용자 만족도를 높일 수 있습니다.


https://tecoble.techcourse.co.kr/post/2023-08-15-how-to-improve-ux-with-optimistic-update/

서버 데이터와 화면의 상태 간 일관성이 중요한 경우, 낙관적 업데이트를 지양해야 합니다. 결제나 계정 정보 관리 등의 기능들은 일정 시간의 지연 시간이 필연적이라는 사실을, 많은 사용자가 그동안의 사용자 경험으로 인지하고 있는 부분입니다. 따라서 이러한 상황에는 낙관적 업데이트를 하여 사용자 경험을 저하하기보다는, 중요한 작업의 신뢰성을 유지하기 위해 ‘로딩 중’처럼 서버 응답을 기다리도록 하는 것이 안전합니다.

onMutate

이 함수는 돌연변이 함수가 실행되기 전에 실행되며, 돌연변이 함수가 받을 동일한 변수가 전달됩니다.
돌연변이가 성공하기를 바라며 리소스에 대한 낙관적 업데이트를 수행하는 데 유용합니다.
이 함수에서 반환된 값은 변형 실패 시 onError및 함수 모두에 전달되며 낙관적 업데이트를 롤백하는 데 유용할 수 있습니다



---

# useQuery에서 사용하는 config 옵션들

1. enabled
쿼리가 활성화되어 데이터를 가져올 것인지 여부를 나타내는 불리언 값입니다. 기본값은 true이며, false로 설정하면 쿼리가 수동으로 활성화되어야 합니다.

2. retry
쿼리를 재시도하는 횟수나 조건을 설정하는 객체입니다. 예를 들어, { retries: 3, retryDelay: 1000 }와 같이 설정하면 최대 3번 재시도하며 각 재시도 사이에 1초의 딜레이가 있습니다.

3. onSuccess 
쿼리가 성공적으로 데이터를 가져왔을 때 실행할 콜백 함수입니다. 데이터를 처리하거나 상태를 업데이트하는 데 사용됩니다.

4. onError
쿼리가 실패했을 때 실행할 콜백 함수입니다. 오류 처리에 사용됩니다.

5. onSettled
쿼리가 완료되었을 때(성공 또는 실패 모두 포함) 실행할 콜백 함수입니다.

6. refetchOnWindowFocus
페이지나 탭이 다시 포커스를 받을 때 쿼리를 자동으로 다시 불러올지 여부를 나타내는 부울 값입니다. 이 옵션을 true로 설정하면 페이지가 다시 활성화될 때 쿼리를 자동으로 다시 실행합니다.


https://jollyworker.co.kr/react-query%EC%9D%98-usequery%EC%97%90%EC%84%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-config-%EC%98%B5%EC%85%98-6%EA%B0%80%EC%A7%80/


---



