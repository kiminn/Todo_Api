import styled from 'styled-components';
import { flexCenter, positionCenter } from '../../styles/common.style';
import { useState } from 'react';
import SignInForm from './components/sign-in-form';
import SignUpForm from './components/sign-up-form';

const Home = () => {
    const [isLogin, setIsLogin] = useState(true);

    const onClickHeader = (e) => {
        const { innerText } = e.target;
        if (innerText === 'SIGN-IN') {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    };

    return (
        <Wrapper>
            <Container>
                <Header>
                    <div isLogIn={isLogin} onClick={onClickHeader} className={isLogin ? 'focused' : ' '}>
                        SIGN-IN
                    </div>
                    <div isLogIn={isLogin} onClick={onClickHeader} className={isLogin ? ' ' : 'focused'}>
                        SIGN-UP
                    </div>
                </Header>
                {isLogin ? <SignInForm /> : <SignUpForm />}
            </Container>
        </Wrapper>
    );
};

export default Home;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const Container = styled.div`
    width: 22%;
    height: 48%;
    ${flexCenter}
    ${positionCenter}
    flex-direction: column;
    border-radius: 14px;
    background-color: ${({ theme }) => theme.COLORS.white};
    box-shadow: ${({ theme }) => theme.BOX_SHADOW.container};
`;

const Header = styled.div`
    width: 100%;
    height: 10%;
    position: absolute;
    top: 0;
    display: flex;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    color: ${({ theme }) => theme.COLORS.white};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    background: ${({ theme }) => theme.COLORS.primary[700]};

    & > div {
        width: 50%;
        ${flexCenter}
        cursor: pointer;
        &.focused {
            background: ${({ theme }) => theme.COLORS.primary[500]};
            border-top-left-radius: 14px;
            border-top-right-radius: 14px;
        }
    }
`;
