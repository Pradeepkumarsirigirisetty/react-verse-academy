import React, { useState } from 'react';
import { quizQuestions } from '../../data/mockData';
import './Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-page animate-fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="gradient-text">Knowledge Check</h1>
          <p>Test your understanding of React concepts.</p>
        </div>
      </header>

      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="quiz-card glass">
          {showResult ? (
            <div className="quiz-result animate-fade-in">
              <h2>Quiz Completed!</h2>
              <div className="score-circle">
                <span>{score}</span> / {quizQuestions.length}
              </div>
              <p>
                {score === quizQuestions.length ? "Perfect score! You're a React master!" : 
                 score >= quizQuestions.length / 2 ? "Good job! Keep practicing to improve." : 
                 "You might want to review the syllabus modules again."}
              </p>
              <button className="btn btn-primary" onClick={resetQuiz} style={{ marginTop: '2rem' }}>
                Retake Quiz
              </button>
            </div>
          ) : (
            <>
              <div className="quiz-progress">
                <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h3 className="quiz-question">{quizQuestions[currentQuestion].question}</h3>

              <div className="quiz-options">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button 
                    key={index} 
                    className={`quiz-option ${selectedOption === index ? 'selected' : ''}`}
                    onClick={() => handleOptionSelect(index)}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                    {option}
                  </button>
                ))}
              </div>

              <div className="quiz-actions">
                <button 
                  className="btn btn-primary" 
                  onClick={handleNextQuestion}
                  disabled={selectedOption === null}
                >
                  {currentQuestion === quizQuestions.length - 1 ? 'Finish' : 'Next Question'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
