import React, { useEffect } from "react";

export const Timer = ({ secondRemaining, dispatch }) => {
  const min = Math.floor(secondRemaining / 60);
  const sec = secondRemaining % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className=" border-2 text-black rounded-full mt-7 py-2 px-4 font-bold  border-gray-600">
      {min < 10 ? "0" : ""}
      {min}:{sec < 10 ? "0" : ""}
      {sec}
    </div>
  );
};
