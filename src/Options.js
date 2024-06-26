import React from "react";

export const Options = ({ question, dispatch, answer }) => {
  const correctAnswer = question.correctOption;
  const newanswer = answer !== null;
  return (
    <div>
      {question.options.map((option) => (
        <div key={option}>
          <button
            onClick={() =>
              dispatch({
                type: "newanswer",
                payload: option,
              })
            }
            className={`bg-option ${
              newanswer ? (correctAnswer === option ? "correct" : "wrong") : ""
            } py-3 px-40`}
            disabled={newanswer}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
};
