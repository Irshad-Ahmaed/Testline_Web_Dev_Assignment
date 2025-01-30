import React, { useContext } from 'react';
import QuizContext from '../context/QuizContext';
import Question from './Question';
import ProgressBar from './ProgressBar';
import Results from './Results';

const Quiz = () => {
    const { quizData, currentQuestion, showResults, handleAnswerClick } = useContext(QuizContext);

    if (showResults) {
        return <Results />;
    }
    console.log("quiz", quizData[currentQuestion]?.options);
    if (quizData.length === 0) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <ProgressBar />
            <Question
                question={quizData[currentQuestion]?.description}
                answers={quizData[currentQuestion]?.options}
                handleAnswerClick={handleAnswerClick}
            />
        </div>
    );
};

export default Quiz;