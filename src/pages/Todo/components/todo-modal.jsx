import styled from 'styled-components';
import closeIcon from '../../../images/cross-2.png';
import XXButton from '../../../components/Button';

const TodoModal = ({ setTodoList, setIsOpenModal }) => {
    const onAddTodo = (e) => {
        e.preventDefault();
        const { content } = e.target;
        setTodoList((prev) => [...prev, { id: Math.floor(Math.random() * 10000), content: content.value }]);
        setIsOpenModal(false);
    };

    return (
        <Wrapper>
            <Form onSubmit={onAddTodo}>
                <CloseIcon src={closeIcon} onClick={() => setIsOpenModal(false)} />
                <Title>목록 추가</Title>
                <Input type="text" name="content" />
                <XXButton variant={'primary'} size={'large'}>
                    확인
                </XXButton>
            </Form>
        </Wrapper>
    );
};

export default TodoModal;

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 400px;
    height: 300px;
    border: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
    position: relative;
    background-color: white;
    border-radius: 10px;
    & > input {
        outline: none;
    }
`;

const Title = styled.div`
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    margin-bottom: 20px;
`;

const Input = styled.input`
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    width: 260px;
    height: 40px;
    margin-bottom: 15px;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    text-align: center;
`;

const CloseIcon = styled.img`
    width: 25px;
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
`;
