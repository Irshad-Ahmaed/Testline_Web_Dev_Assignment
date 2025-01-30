import React, { useContext } from 'react';
import QuizContext from '../context/QuizContext';

const ProgressBar = () => {
    const { quizData, currentQuestion } = useContext(QuizContext);

    const progress = ((currentQuestion + 1) / quizData.length) * 100;

    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;