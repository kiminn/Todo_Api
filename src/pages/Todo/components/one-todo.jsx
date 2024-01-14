import styled from 'styled-components';
import editIcon from '../../../images/pencil-2.png';
import closeIcon from '../../../images/cross-2.png';
import { useRef, useState } from 'react';
import { useQueryClient } from 'react-query';
import TodoQueryApi from '../../../apis/todo.query.api';
import QueryKey from '../../../consts/query-key';
import { useNavigate, useParams } from 'react-router-dom';

const OneTodo = ({ title, content, id }) => {
    const [isEdit, setIsEdit] = useState(false);
    const todoContentInput = useRef(null);
    const navigate = useNavigate();
    // const { id } = useParams();
    const queryClient = useQueryClient();
    const deleteData = TodoQueryApi.deleteTodo(id, () => queryClient.invalidateQueries([QueryKey.todoData]));

    // queryClient.invalidateQueries 함수는 캐시된 쿼리를 무효화!!하고
    // 해당 쿼리를 다시 불러오도록 트리거하는 데 사용됩니다.
    // 이 함수는 데이터가 업데이트되었거나 변경된 경우, 수동으로 쿼리를 다시 불러오기 위해 사용됩니다.
    // 이는 데이터 업데이트 및 UI의 즉각적인 반영을 쉽게 처리할 수 있는 강력한 메커니즘 중 하나입니다.

    const onDeleteTodo = () => {
        // deleteDate호출하며 비동기적으로 데이터 삭제
        deleteData.mutateAsync();
        setTimeout(() => {
            navigate('/todo');
        }, 1500);
    };

    // const onEditTodo = (el) => {
    //     if (!isEdit) return setIsEdit(true);
    //     if (window.confirm('정말 수정하시겠습니까?')) {
    //         setTodoList((todoList) => {
    //             const update_todo = todoList.find((item) => item.id === el);
    //             update_todo.content = todoContentInput.current.value;
    //             return todoList;
    //         });
    //         setIsEdit(false);
    //     }
    // };

    return (
        <Wrapper>
            <ContentBox>
                <Title>title:{isEdit ? <EditInput defaultValue={title} ref={todoContentInput} /> : title}</Title>
                <Content>
                    content:{isEdit ? <EditInput defaultValue={content} ref={todoContentInput} /> : content}
                </Content>
            </ContentBox>
            <IconBox>
                <EditIcon src={editIcon} onClick={() => onEditTodo()} />
                <DeleteIcon src={closeIcon} onClick={() => onDeleteTodo()} />
            </IconBox>
        </Wrapper>
    );
};

export default OneTodo;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const ContentBox = styled.div`
    padding: 30px 0px;
`;

const Title = styled.div``;
const Content = styled.div``;

const EditIcon = styled.img`
    width: 25px;
    margin: 10px;
    cursor: pointer;
`;

const DeleteIcon = styled.img`
    width: 20px;
    margin: 10px 0 10px 10px;
    cursor: pointer;
`;

const EditInput = styled.input`
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    border: 1px solid #eaeaea;
    border-radius: 4px;
`;
const IconBox = styled.div`
    display: flex;
    align-items: center;
`;

/**
 * const updateUser = key => {
	return rest.patch("/users/:id", async (req, res, ctx) => {
		const { id } = req.params;
		const editedData = { id: parseInt(id) };

		await req.json().then(data => {
			editedData[`${key}`] = data[`${key}`];
		});

		return res(ctx.status(200), ctx.json(editedData));
	});
};
 */
