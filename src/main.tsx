import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div
      className={`antialiased font-brockmann min-h-screen mx-auto dark:bg-gray-950 dark:text-gray-200`}
    >
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
