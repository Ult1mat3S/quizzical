import { nanoid } from "nanoid";
import { useState } from "react";

export default function Quiz({ question }) {
  const allAnswers = [...question.incorrectAnswers, question.correctAnswer];
  // const [answersState, setAnswerState] = useState({ isSelected: true });

  // setAnswerState((question) =>
  //   allAnswers.map((question) => {
  //     return question.isSelected ? true : false;
  //   })
  // );
  // console.log(answersState);

  function handleChange() {
    console.log(
      document.querySelector(`input[name="${question.id}"]:checked`).value
    );
  }

  return (
    <>
      <div>
        <h2 className="question-title">{question.question}</h2>

        {allAnswers.map((answer) => (
          <div className="button" key={nanoid()}>
            <input
              className="input"
              name={question.id}
              type="radio"
              key={nanoid()}
              value={answer}
              onChange={handleChange}
            />
            <label htmlFor={answer}>{answer}</label>
          </div>
        ))}
      </div>
    </>
  );
}
