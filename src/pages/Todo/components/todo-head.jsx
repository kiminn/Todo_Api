import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ko';

const TodoHead = ({ todoList }) => {
    const today = moment().format('YYYY년 MM월 DD일');
    const day = moment().format('dddd');
    console.log(today);

    return (
        <Container>
            <Today>{today}</Today>
            <Day>{day}</Day>
            <br />
            <TodoCount>할 일이 {todoList.length}개 남았어요</TodoCount>
        </Container>
    );
};

export default TodoHead;

const Container = styled.div`
    position: absolute;
    top: 4%;
    left: 6%;
    right: 6%;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.gray[100]};
`;

const Today = styled.div`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
`;

const Day = styled.div`
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    color: ${({ theme }) => theme.COLORS.gray[500]};
    margin-top: 2px;
`;

const TodoCount = styled.div`
    color: ${({ theme }) => theme.COLORS.primary[300]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;
