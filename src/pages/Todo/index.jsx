import { useState } from 'react';

const Todo = () => {
    const [todoList, setTodoList] = useState([]);

    return (
        <>
            <Wrapper>
                <Container>
                    <TodoHead />
                    <TodoContainer>
                        {todoList.map((todo) => (
                            <OneTodo todo={todo} />
                        ))}
                    </TodoContainer>
                    <Button onClick={onOpenModal}>
                        <img src={plusIcon} />
                    </Button>
                </Container>
            </Wrapper>
            {/* {isOpenModal && <TodoModal setIsOpenModal={setIsOpenModal} />} */}
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
    background-color: ${({ theme }) => theme.COLORS.white};
    flex-direction: column;
    ${positionCenter}
    ${flexAlignCenter}
	overflow: hidden;
`;

const TodoContainer = styled.div`
    margin-top: 160px;
`;

const Button = styled.div`
    background-color: ${({ theme }) => theme.COLORS.mint};
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    position: absolute;
    bottom: 3%;
`;
