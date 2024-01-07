import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from 'styled-components';
import router from './router/routes';
import theme from './styles/theme.style';
import GlobalStyles from './styles/global.style';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    );
}

export default App;
