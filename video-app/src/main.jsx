import React from 'react';
import ReactDOM from 'react-dom/client';
import VideoPage from './pages/VideoPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/404';
import { CommentsContextProvider } from './context/CommentsContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFound text='page' />,
  },
  {
    path: '/watch/:videoId',
    element: <VideoPage />,
    errorElement: <NotFound NotFound text='video' />,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CommentsContextProvider>
      <RouterProvider router={router} />
    </CommentsContextProvider>
  </React.StrictMode>
);
