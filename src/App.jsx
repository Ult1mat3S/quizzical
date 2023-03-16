import { decode } from "html-entities";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Quiz from "./Components/Quiz";

export default function App() {
  const [questions, setQuestions] = useState([]);

  async function getTriviaData() {
    const res = await fetch("https://opentdb.com/api.php?amount=5");
    const data = await res.json();
    const formattedQuestions = data.results.map((question) => ({
      question: decode(question.question),
      id: nanoid(),
      isSelected: false,
      difficulty: question.difficulty,
      type: question.type,
      correctAnswer: question.correct_answer,
      incorrectAnswers: question.incorrect_answers.map((answer) =>
        decode(answer)
      ),
    }));
    setQuestions(formattedQuestions);
  }

  const quizElements = questions.map((question) => {
    return (
      <Quiz
        question={question}
        key={question.id}
        isSelected={question.isSelected}
      />
    );
  });

  return (
    <>
      <div className="App">
        <h1 className="title">Quizzical</h1>
        <h2 className="description">
          Do you have what it takes? Try out Quizzical. A game where you'll be
          given five randomly generated trivia questions. Press "Start" whenever
          you are ready. <br />
          <br />
          Good luck!
        </h2>
        <button className="start-button" onClick={getTriviaData}>
          Start
        </button>
      </div>
      <div className="quiz-container">{quizElements}</div>
    </>
  );
}
