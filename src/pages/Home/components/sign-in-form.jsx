import XXButton from '../../../components/Button';
import XXInput from '../../../components/Input';
import { useForm } from 'react-hook-form';
import { signInStep } from '../../../consts/sign-in-step';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../utils/schema';

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        // 현재 form의 상태
        formState: { errors, isValid },
    } = useForm({ mode: 'onChange', resolver: yupResolver(schema[0]) });

    return (
        <form onSubmit={handleSubmit()}>
            {signInStep[0].map((el) => (
                <XXInput
                    label={el.label}
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
