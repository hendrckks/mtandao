// src/app/main/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center text-black bg-white font-ppbook h-[100vh]">
      <h1 className="text-5xl font-bold mb-4">
        4<span className="text-[#b8ff45]">0</span>4 - Page Not Found
      </h1>
      <p className="mb-4">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="text-red-400 hover:underline">
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
