import React from "react";

export const Next = ({ answer, dispatch, index, questionLength }) => {
  if (!answer) return null;
  if (index + 1 < questionLength)
    return (
      <div>
        <button
          onClick={() => dispatch({ type: "nextQuestion" })}
          className="bg-black text-white w-full rounded-full mt-7 py-2 px-4 font-bold items-end"
        >
          {" "}
          Next
        </button>
      </div>
    );
  if (index + 1 === questionLength) {
    return (
      <div>
        <button
          onClick={() => dispatch({ type: "finishedQuetions" })}
          className="bg-black text-white w-full rounded-full mt-7 py-2 px-4 font-bold items-end"
        >
          {" "}
          Finished
        </button>
      </div>
    );
  }
};
