import React from "react";

export const Finishedscreen = ({ maxpoints, allpoints, dispatch }) => {
  const getEmojiAndText = () => {
    if (allpoints >= 150) {
      return {
        emoji: "🏆",
        text: "Champion",
        message: "You have reached the top!",
      };
    } else if (allpoints >= 100) {
      return {
        emoji: "🥇",
        text: "Gold Medal",
        message: "Great job! You are doing excellent!",
      };
    } else if (allpoints >= 50) {
      return {
        emoji: "😊",
        text: "Keep Going",
        message: "Nice work! Keep pushing forward!",
      };
    } else {
      return {
        emoji: "😢",
        text: "Try Harder",
        message: "Don't give up! Keep trying!",
      };
    }
  };

  const { emoji, text, message } = getEmojiAndText();

  return (
    <div>
      <div className="flex flex-col items-center justify-around space-y-10 mt-10">
        <div className="font-bold text-2xl bg-blue-500 rounded-full px-4 py-2 text-white">
          You scored {allpoints} out of {maxpoints}
        </div>

        <div>
          <div className="emoji-container">
            <div className="flex space-x-5 bg-blue-500 text-white rounded-full px-2">
              <div>{message}</div>
              <div>{emoji}</div>
              <div>{text}</div>
            </div>
          </div>
        </div>

        <div>
          <button
            className="py-2 px-4  text-white bg-green-600 font-bold rounded-full hover:bg-green-500"
            onClick={() => dispatch({ type: "restart" })}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};
