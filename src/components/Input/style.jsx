import styled from 'styled-components';

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    & > input {
        width: 260px;
        font-size: ${({ theme }) => theme.FONT_SIZE.small};
        box-sizing: border-box;
        padding: 10px;
        border-radius: 8px;
        border: none;
        background-color: ${({ theme }) => theme.COLORS.gray[100]};
        margin-top: 5px;
        &:focus {
            outline: none;
        }
    }
`;

const Label = styled.label`
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
`;

const ValidateMessage = styled.p`
    padding: 5px;
    max-width: 260px;
    color: ${({ theme }) => theme.COLORS.gray[500]};
    font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
`;

export const S = {
    InputBox,
    Label,
    ValidateMessage,
};
