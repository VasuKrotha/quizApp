import React from "react";

export default function Startscreen({ questionLength, setMystatus, dispatch }) {
  return (
    <div className="text-center mt-9">
      <h2 className="text-3xl font-bold">Welcome to the Front End Quiz</h2>
      <h3 className="text-xl my-7 font-semibold">
        Total Question : {questionLength}
      </h3>
      <button
        className="py-2 px-4 bg-blue-700 rounded-lg cursor-pointer font-semibold text-white hover:bg-blue-600"
        onClick={() => dispatch({ type: "active" })}
      >
        Lets start's
      </button>
    </div>
  );
}
