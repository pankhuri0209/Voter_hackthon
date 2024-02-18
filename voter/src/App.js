import React, { useState } from "react";

const Question = ({ question, onAnswer }) => (
  <div>
    <h3>{question.text}</h3>
    {question.options.map((option, index) => (
      <button key={index} onClick={() => onAnswer(option)}>
        {option}
      </button>
    ))}
  </div>
);

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(selectedAnswer);
    }
  };

  return (
    <div>
      {currentQuestion && (
        <Question question={currentQuestion} onAnswer={handleAnswer} />
      )}
    </div>
  );
};

const VoteSmartHome = () => {
  const questions = [
    {
      text: "Question 1",
      options: ["Answer 1", "Answer 2", "Answer 3"],
    },
    // Add more questions here...
  ];

  const handleQuizComplete = (answer) => {
    // Handle quiz completion here, e.g., call an API or display results.
    console.log("Quiz completed with answer:", answer);
  };

  return (
    <div>
      <h1>VoteSmart Home</h1>
      <Quiz questions={questions} onComplete={handleQuizComplete} />
    </div>
  );
};

export default VoteSmartHome;
