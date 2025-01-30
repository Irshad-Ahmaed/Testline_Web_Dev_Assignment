import React, { useContext, useEffect, useState } from 'react';
import QuizContext from '../context/QuizContext';

const Question = ({ question, answers, handleAnswerClick }) => {
    const {currentQuestion} = useContext(QuizContext);

    const questionNum = ['A', 'B', 'C', 'D'];
    const [answerColor, setAnswerColor] = useState('bg-gray-100');
    const [answerNum, setAnswerNum] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [choosedAnswerFirstTime, setChoosedAnswerFirstTime] = useState(null);

    useEffect(() => {
        answers.map((answer) => {
            if (answer.is_correct == true) {
                setAnswer(answer.description);
            }
        });
    }, [currentQuestion]);

    // Mark the answer if correct
    const isAnswerCorrect = (answer, index) => {
        if(choosedAnswerFirstTime == null) {
            setChoosedAnswerFirstTime(answer);
        }

        if (answer) {
            setAnswerColor('bg-green-300');
            setAnswerNum(index);
            setShowAnswer(true);
        }
        else {
            setAnswerColor('bg-red-300');
            setAnswerNum(index);
            setShowAnswer(true);
        }
    };

    // Change the Question Number
    const changeQuestion = (isNext) => {
        console.log(isNext);
        if(choosedAnswerFirstTime == null && isNext === 1) alert("OOps, You didn't select the answer")
        else {
            handleAnswerClick(choosedAnswerFirstTime, isNext);
            setChoosedAnswerFirstTime(null);
            setShowAnswer(false);
            setAnswer(null);
            setAnswerNum(null);
            setAnswerColor('bg-gray-100');
        }
    };

    return (
        <>
            <div className='w-full'>
                <h2 className="text-xl font-semibold mb-4">{question}</h2>
                <div className="space-y-4">
                    {answers.map((answer, index) => (
                        <button
                            key={index}
                            onClick={() => isAnswerCorrect(answer.is_correct, index)}
                            className={`w-full relative px-4 py-2 ${answerNum == index ? `${answerColor} hover:${answerColor}` : 'bg-gray-100 hover:bg-blue-500'}
                            hover:text-white rounded-2xl transition-all duration-300 cursor-pointer`}
                        >
                            <span className='left-5 absolute rounded-full'>{questionNum[index]}.</span>
                            {answer.description}
                        </button>
                    ))}
                    {
                        showAnswer &&
                        <span className={`w-full mt-10 p-2 flex justify-center item-center bg-green-200
                            text-green-600 rounded`}>
                            Correct Answer is: {answer}
                        </span>
                    }
                </div>
            </div>
            <div className={`w-full flex ${currentQuestion > 0 ? 'justify-between' : 'justify-end'}`}>
                {
                    currentQuestion > 0 &&
                    <button
                        onClick={()=> changeQuestion(-1)}
                        className={`px-4 py-2 mt-10 bg-orange-200 w-fit hover:bg-orange-300 text-white
                        rounded-2xl transition-all duration-300 cursor-pointer`}
                    >
                        Prev
                    </button>
                }
                
                <button
                    onClick={()=> changeQuestion(1)}
                    className={`px-4 py-2 mt-10 bg-blue-400 w-fit hover:bg-blue-500 text-white
                    rounded-2xl transition-all duration-300 cursor-pointer`}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default Question;