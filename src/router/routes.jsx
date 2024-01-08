import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
// import Todo from '../pages/Todo';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    // {
    //     path: '/todo',
    //     element: <Todo />,
    // },
]);

export default router;
