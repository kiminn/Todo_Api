import { S } from './style';

const XXInput = ({ label, id, errors, register, ...inputProps }) => {
    return (
        <>
            <S.InputBox>
                <S.Label>{label}</S.Label>
                <input {...inputProps} {...register(id)} />
                {errors[id] && <S.ValidateMessage>{errors[id].message}</S.ValidateMessage>}
            </S.InputBox>
        </>
    );
};

export default XXInput;
