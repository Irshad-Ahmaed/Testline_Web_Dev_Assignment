import React, { useContext } from 'react';
import QuizContext from '../context/QuizContext';
import { useNavigate } from 'react-router-dom';

const Results = () => {
    const { score, quizData, resetQuiz } = useContext(QuizContext);
    const navigate = useNavigate();

    return (
        <div className="text-center mt-10">
            <h1 className="text-2xl font-bold">Quiz Completed!</h1>
            <p className="mt-4">
                Your Score: {score} / {quizData.length}
            </p>
            <button
                onClick={() => {
                    resetQuiz();
                    navigate('/quiz');
                }}
                className="mt-6 px-6 py-2 bg-blue-500 text-white rounded
                hover:bg-blue-600 transition duration-300 cursor-pointer"
            >
                Retry Quiz
            </button>
            {
                score < 5 ? 
                <div className='flex w-full item-center justify-center'>
                    <p className='bg-orange-300 text-white rounded-xl w-fit text-center px-2 mt-5'>OOPs, Your performance is poor you need to work hard!</p>
                </div>
                :
                <div className='flex w-full item-center justify-center'>
                    <p className='bg-green-300 text-white rounded-xl w-fit text-center px-2 mt-5'>Great Job, You are doing good!</p>
                </div>
            }
        </div>
    );
};

export default Results;