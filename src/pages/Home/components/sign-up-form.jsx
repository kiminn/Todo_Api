import XXButton from '../../../components/Button';
import XXInput from '../../../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../utils/schema';
import AuthApi from '../../../apis/auth.api';
import { signInUp } from '../../../consts/sign-in-up';

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: 'onChange', resolver: yupResolver(schema[1]) });

    const onSubmitSignUp = handleSubmit(async (data) => {
        console.log('signInData', data);
        try {
            await AuthApi.signUp(data.email, data.pw);
            alert('축하합니다! 회원가입이 완료 되었습니다 :)');
        } catch (error) {
            alert('잘못된 접근입니다');
        }
    });

    return (
        <form onSubmit={onSubmitSignUp}>
            {signInUp[1].map((el) => (
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
                회원가입
            </XXButton>
        </form>
    );
};

export default SignUpForm;
