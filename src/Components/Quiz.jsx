import { nanoid } from "nanoid";

export default function Quiz({ question }) {
  const allAnswers = [...question.incorrectAnswers, question.correctAnswer];

  return (
    <>
      <div>
        <h2 className="question-title">{question.question}</h2>
        {allAnswers.map((answer) => (
          <div className="button" key={nanoid()}>
            <input
              name={question.id}
              type="radio"
              key={nanoid()}
              value={answer}
            />
            <label htmlFor={answer}>{answer}</label>
          </div>
        ))}
      </div>
    </>
  );
}
