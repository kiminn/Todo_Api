import styled from 'styled-components';
import editIcon from '../../../images/pencil-2.png';
import closeIcon from '../../../images/cross-2.png';
import { useRef, useState } from 'react';

const OneTodo = ({ todo, todoList, setTodoList }) => {
    const [isEdit, setIsEdit] = useState(false);
    const todoContentInput = useRef(null);

    const onDeleteTodo = (el) => {
        const delete_list = todoList.filter((item) => item.id !== el);
        setTodoList(delete_list);
    };

    const onEditTodo = (el) => {
        if (!isEdit) return setIsEdit(true);
        if (window.confirm('정말 수정하시겠습니까?')) {
            setTodoList((todoList) => {
                const update_todo = todoList.find((item) => item.id === el);
                update_todo.content = todoContentInput.current.value;
                return todoList;
            });
            setIsEdit(false);
        }
    };

    return (
        <Wrapper>
            <ContentBox>
                {isEdit ? <EditInput defaultValue={todo.content} ref={todoContentInput} /> : todo.content}
            </ContentBox>
            <IconBox>
                <EditIcon src={editIcon} onClick={() => onEditTodo(todo.id)} />
                <DeleteIcon src={closeIcon} onClick={() => onDeleteTodo(todo.id)} />
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
