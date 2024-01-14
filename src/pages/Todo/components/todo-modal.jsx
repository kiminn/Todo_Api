import styled from 'styled-components';
import closeIcon from '../../../images/cross-2.png';
import XXButton from '../../../components/Button';
import { useMutation, useQueryClient } from 'react-query';
import TodoApi from '../../../apis/todo.api';
import { useForm } from 'react-hook-form';
import TodoQueryApi from '../../../apis/todo.query.api';

const TodoModal = ({ setTodoList, setIsOpenModal }) => {
    const {
        register,
        handleSubmit,
        // 현재 form의 상태
    } = useForm({ mode: 'onChange' });
    const queryClient = useQueryClient();

    const { mutate } = useMutation((todoData) => TodoApi.addTodo(todoData), {
        onSuccess: async () => {
            // 'tasks' 쿼리의 캐시를 무효화하여 강제로 다시 불러옴
            await queryClient.invalidateQueries(['todo']);
        },
    });

    //?ㅠㅠㅠJane님😇
    const onAddTodo = handleSubmit((data) => {
        const { title, content } = data;
        try {
            const todoList = {
                title,
                content,
            };
            console.log('target', todoList);
            // mutate를 호출하면 즉시반환
            mutate(todoList);
            setIsOpenModal(false);
        } catch (error) {
            throw new Error('데이터를 저장할 수 없습니다.');
        }
    });
    return (
        <Wrapper>
            <Form onSubmit={onAddTodo}>
                <CloseIcon src={closeIcon} onClick={() => setIsOpenModal(false)} />
                <Title>할 일 생성</Title>
                <Input type="text" name="title" {...register('title')} />
                <Input type="text" name="content" {...register('content')} />
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
    width: 380px;
    height: 280px;
    border: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
    position: relative;
    background-color: #ffffff6f;
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
    width: 18px;
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
`;

/**
 * queryClient.invalidateQueries는 React Query 라이브러리에서 사용되는 함수 중 하나입니다.
 * 이 함수는 캐시된 쿼리 결과를 무효화(invalidate)
 *  React Query는 데이터를 비동기적으로 가져오고 캐시하며,
 * invalidateQueries를 사용하면 특정 쿼리나 쿼리 그룹의 캐시된 데이터를 강제로 다시 불러오도록 유도할 수 있습니다.
 */
