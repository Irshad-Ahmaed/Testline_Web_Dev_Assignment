import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <h1 className="text-4xl font-bold text-white mb-6">Welcome to the Quiz App!</h1>
            <button
                onClick={() => navigate('/quiz')}
                className="px-8 py-3 bg-white text-blue-600 font-semibold 
                rounded-lg shadow-lg hover:bg-blue-100 transition duration-300 cursor-pointer"
            >
                Start Quiz
            </button>
        </div>
    );
};

export default Home;