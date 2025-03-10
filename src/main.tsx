import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { app, analytics } from './firebaseConfig';

// Make sure Firebase is initialized
console.log('Firebase App initialized', app);
console.log('Firebase Analytics initialized', analytics);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div
      className={`antialiased font-athauss min-h-screen mx-auto dark:bg-gray-950 dark:text-gray-200`}
    >
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
