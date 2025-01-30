import React, { createContext, useState, useEffect } from 'react';
import { fetchQuizData } from '../services/quizService';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [quizData, setQuizData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        const loadQuizData = async () => {
            const data = await fetchQuizData();
            console.log('data', data.questions)
            setQuizData(data?.questions);
        };
        loadQuizData();
    }, []);

    const handleAnswerClick = (choosedAnswer, isNext) => {
        console.log("isNext", isNext, choosedAnswer);
        if (choosedAnswer) {
            setScore(score + 1);
        }

        const nextQuestion = isNext == 1 ? currentQuestion + 1 : currentQuestion - 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResults(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResults(false);
    };

    return (
        <QuizContext.Provider
            value={{
                quizData,
                currentQuestion,
                score,
                showResults,
                handleAnswerClick,
                resetQuiz,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};

export default QuizContext;