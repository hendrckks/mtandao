import { createBrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from '../app/MainLayout';
import Home from '../app/pages/Home';
import Services from '../app/pages/Services';
import Contact from '../app/pages/Contact';
import NotFound from '../components/navigation/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AnimatePresence mode="sync">
        <MainLayout />
      </AnimatePresence>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'contact-us',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
