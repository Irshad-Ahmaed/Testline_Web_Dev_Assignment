import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import { QuizProvider } from './context/QuizContext';

const App = () => {
    return (
        <QuizProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quiz" element={<Quiz />} />
                </Routes>
            </Router>
        </QuizProvider>
    );
};

export default App;