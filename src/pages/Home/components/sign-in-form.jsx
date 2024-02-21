import XXButton from '../../../components/Button';
import XXInput from '../../../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../utils/schema';
import AuthApi from '../../../apis/auth.api';
import { signInUp } from '../../../consts/sign-in-up';
import { useAuth } from '../../../context/auth.ctx';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        // 현재 form의 상태
        formState: { errors, isValid },
    } = useForm({ mode: 'onChange', resolver: yupResolver(schema[0]) });

    const { signIn } = useAuth();
    const navigate = useNavigate();

    const onSubmitSignIn = handleSubmit(async (data) => {
        try {
            const res = await AuthApi.signIn(data.email, data.password);
            signIn(res.token);
            navigate('/todo');
            return res;
        } catch (error) {
            throw new Error('잘못된 접근입니다');
        }
    });

    return (
        <form onSubmit={onSubmitSignIn}>
            {signInUp[0].map((el) => (
                <XXInput
                    label={el.label}
                    key={el.id}
                    id={el.id}
                    type={el.type}
                    placeholder={el.placeholder}
                    maxLength={el.maxLength}
                    register={register}
                    errors={errors}
                />
            ))}
            <XXButton variant={'primary'} size={'large'} disabled={!isValid}>
                로그인
            </XXButton>
        </form>
    );
};

export default SignInForm;

/**
 * isValid는 현재 폼이 유효한지 여부를 나타내는 불리언 값
 * 이 값에 따라 Submit 버튼이 활성화되거나 비활성화됩니다.
 * 이를 통해 사용자가 유효한 데이터만을 서버로 전송할 수 있도록 할 수 있습니다.
 *
 * react-hook-form 라이브러리에서 register는 입력 요소(예: input, select, textarea 등)를 폼 상태로 등록하는 데 사용되는 메서드입니다.
 * 이 메서드를 사용하면 입력 요소의 값을 추적하고, 유효성 검사 및 다른 폼 상태와 연결할 수 있습니다.
 *
 * handleSubmit form의 제출 이벤트 처리
 */
