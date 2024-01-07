import XXButton from '../../../components/Button';
import XXInput from '../../../components/Input';
import { useForm } from 'react-hook-form';
import { signUpStep } from '../../../consts/sign-up-step';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../utils/schema';

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: 'onChange', resolver: yupResolver(schema[1]) });

    return (
        <form onSubmit={handleSubmit()}>
            {signUpStep[0].map((el) => (
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
                회원가입
            </XXButton>
        </form>
    );
};

export default SignUpForm;
