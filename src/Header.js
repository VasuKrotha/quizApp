import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="flex justify-center mt-5 items-center gap-10">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt=""
            className="w-16"
          />
        </div>
        <div className="font-bold text-3xl "> Quiz App </div>
      </div>
    </header>
  );
};
