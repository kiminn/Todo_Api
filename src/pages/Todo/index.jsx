import { useState } from 'react';
import OneTodo from './components/one-todo';
import TodoHead from './components/todo-head';
import styled from 'styled-components';
import { flexAlignCenter, positionCenter } from '../../styles/common.style';
import TodoModal from './components/todo-modal';
import plusIcon from '../../images/plus.png';

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleOpenModal = () => {
        setIsOpenModal(true);
    };

    return (
        <>
            <Wrapper>
                <Container>
                    <TodoHead todoList={todoList} />
                    <TodoContainer>
                        {todoList.map((todo) => (
                            <OneTodo todo={todo} todoList={todoList} setTodoList={setTodoList} />
                        ))}
                    </TodoContainer>
                    <Button onClick={handleOpenModal}>
                        <img src={plusIcon} />
                    </Button>
                </Container>
            </Wrapper>
            {isOpenModal && <TodoModal setIsOpenModal={setIsOpenModal} setTodoList={setTodoList} />}
        </>
    );
};

export default Todo;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.gray[100]};
    overflow: hidden;
`;

const Container = styled.div`
    width: 30%;
    height: 80%;
    border-radius: 14px;
    background-color: white;
    flex-direction: column;
    ${positionCenter}
    ${flexAlignCenter}
	overflow: hidden;
`;

const TodoContainer = styled.div`
    margin-top: 140px;
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    padding: 0% 6%;
    width: 100%;
`;

const Button = styled.div`
    background-color: ${({ theme }) => theme.COLORS.primary[500]};
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    position: absolute;
    bottom: 3%;
`;
