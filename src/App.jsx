import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from 'styled-components';
import router from './router/routes';
import theme from './styles/theme.style';
import GlobalStyles from './styles/global.style';
import AuthProvider from './context/auth.ctx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
