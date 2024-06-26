import React from "react";

export const Progressbar = ({ index, questionLength, points, maxpoints }) => {
  return (
    <div>
      <div className="flex flex-col items-center mt-5">
        {/* <div className="progress-wrapper">
          <div className="progress-bar" style={{ width: `${index}0%` }}></div>
         
        </div> */}
        <div className="progress-wrapper">
          <progress
            max={15}
            value={index}
            className="w-[100%] rounded-full h-5"
          ></progress>
        </div>

        <div className="flex justify-around w-3/4 mt-5">
          {" "}
          <strong>
            Question: {index + 1}/{questionLength}
          </strong>
          <strong>
            Points: {points}/{maxpoints}
          </strong>
        </div>
      </div>
    </div>
  );
};
