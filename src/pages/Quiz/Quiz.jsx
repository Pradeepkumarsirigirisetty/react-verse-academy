import React, { useState } from 'react';
import { moduleQuizData } from '../../data/quizData';
import { FaArrowLeft, FaTrophy, FaCheckCircle, FaTimesCircle, FaBookOpen } from 'react-icons/fa';
import './Quiz.css';

const Quiz = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleStartModuleQuiz = (moduleId) => {
    setActiveModule(moduleId);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    const quiz = moduleQuizData[activeModule];
    if (selectedOption === quiz.questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quiz.questions.length) {
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

  const handleBackToModules = () => {
    setActiveModule(null);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  // 1. Module Selection View
  if (!activeModule) {
    return (
      <div className="quiz-page animate-fade-in">
        <header className="page-header">
          <div className="container">
            <h1 className="gradient-text">Module-Wise Knowledge Check</h1>
            <p>Select a React module below to test your understanding of the reading material.</p>
          </div>
        </header>

        <div className="container">
          <div className="quiz-modules-grid">
            {Object.entries(moduleQuizData).map(([id, mod]) => (
              <div key={id} className="quiz-module-card glass" onClick={() => handleStartModuleQuiz(id)}>
                <div className="quiz-module-badge">Module {id}</div>
                <div className="quiz-module-icon">
                  <FaBookOpen />
                </div>
                <h3>{mod.title}</h3>
                <p>{mod.questions.length} Questions</p>
                <button className="btn btn-primary quiz-start-btn">Start Quiz →</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const currentQuiz = moduleQuizData[activeModule];
  const questionData = currentQuiz.questions[currentQuestion];

  // 2. Active Quiz / Result View
  return (
    <div className="quiz-page animate-fade-in">
      <header className="page-header quiz-active-header">
        <div className="container">
          <button className="btn-back-modules" onClick={handleBackToModules}>
            <FaArrowLeft /> Back to Module Selection
          </button>
          <h1 className="gradient-text">Module {activeModule}: {currentQuiz.title}</h1>
          <p>Test your knowledge on this module's reading material.</p>
        </div>
      </header>

      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="quiz-card glass animate-fade-in">
          {showResult ? (
            <div className="quiz-result animate-fade-in">
              <FaTrophy className="trophy-icon" />
              <h2>Quiz Completed!</h2>
              <div className="score-circle">
                <span>{score}</span> / {currentQuiz.questions.length}
              </div>
              <p className="result-feedback">
                {score === currentQuiz.questions.length ? "🌟 Perfect score! You have fully mastered this module!" : 
                 score >= currentQuiz.questions.length / 2 ? "👍 Good job! Review the reading material to get a perfect score." : 
                 "📚 We recommend re-reading this module's syllabus material and trying again."}
              </p>
              <div className="result-actions">
                <button className="btn btn-outline" onClick={resetQuiz}>
                  Retake Module Quiz
                </button>
                <button className="btn btn-primary" onClick={handleBackToModules}>
                  Choose Another Module
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="quiz-progress">
                <div className="progress-header">
                  <span>Question {currentQuestion + 1} of {currentQuiz.questions.length}</span>
                  <span className="module-indicator">Module {activeModule}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((currentQuestion + 1) / currentQuiz.questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h3 className="quiz-question">{questionData.question}</h3>

              <div className="quiz-options">
                {questionData.options.map((option, index) => (
                  <button 
                    key={index} 
                    className={`quiz-option ${selectedOption === index ? 'selected' : ''}`}
                    onClick={() => handleOptionSelect(index)}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                    <span className="option-text">{option}</span>
                  </button>
                ))}
              </div>

              <div className="quiz-actions">
                <button 
                  className="btn btn-primary btn-next-question" 
                  onClick={handleNextQuestion}
                  disabled={selectedOption === null}
                >
                  {currentQuestion === currentQuiz.questions.length - 1 ? 'Finish Quiz 🎉' : 'Next Question →'}
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
