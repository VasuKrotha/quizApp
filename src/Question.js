import React from "react";
import { Options } from "./Options";

export const Question = ({ question, answer, dispatch }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10 gap-7">
        <h1 className="text-3xl font-bold">{question.question}</h1>
        <Options question={question} dispatch={dispatch} answer={answer} />
      </div>
    </div>
  );
};
