import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Videos from './pages/Videos';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/videos',
    element: <Videos />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
