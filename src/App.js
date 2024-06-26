import { useReducer } from "react";
import "./App.css";

import { Header } from "./Header";
import Main from "./Main";
import Startscreen from "./Startscreen";
import { Question } from "./Question";
import { Next } from "./Next";
import { Progressbar } from "./Progressbar";
import { Finishedscreen } from "./Finishedscreen";
import { Timer } from "./Timer";

const question = [
  {
    question: "Which company invented React ?",
    options: ["Google", "Apple", "Netflix", "Facebook"],
    correctOption: "Facebook",
    points: 10,
  },
  {
    question: "Which is the most popular Javascript Frame work?",
    options: ["Angular", "React", "Vue", "Svelte"],
    correctOption: "React",
    points: 10,
  },
  {
    question: "What does JSX stand for in React.js?",
    options: [
      "JavaScript XML",
      "JavaScript Extension",
      "JavaScript Syntax Extension",
      "JavaScript XML Syntax",
    ],
    correctOption: "JavaScript XML",
    points: 10,
  },
  {
    question: "What is the primary purpose of the useEffect hook in React?",
    options: [
      "To manage the component's state",
      "To handle side effects in functional components",
      "To render JSX elements conditionally",
      "To create a reference to a DOM element",
    ],
    correctOption: "To handle side effects in functional components",
    points: 10,
  },
  {
    question: "What are React Hooks used for?",
    options: [
      "To create class components",
      "To handle side effects and manage state in functional components",
      "To render JSX elements conditionally",
      "To optimize performance of React applications",
    ],
    correctOption:
      "To handle side effects and manage state in functional components",
    points: 10,
  },
  {
    question: "How can you conditionally render components in React?",
    options: [
      "Using the if statement inside JSX",
      "Using the ternary operator (condition ? true : false)",
      "Using map function to iterate over an array",
      "Using the switch statement inside JSX",
    ],
    correctOption: "Using the ternary operator (condition ? true : false)",
    points: 10,
  },
  {
    question:
      "What of the following is used in React.js to increase performance",
    options: [
      "Original DOM",
      "Virtual DOM",
      "Both Original DOM and Virtual DOM",
      "None of the above",
    ],
    correctOption: "Virtual DOM",
    points: 10,
  },
  {
    question:
      "What is the difference between var, let, and const in JavaScript?",
    options: [
      "var is block-scoped, let is function-scoped, and const is globally scoped",
      "var and let are globally scoped, while const is block-scoped",
      "var is globally scoped, let and const are block-scoped",
      "var is function-scoped, let and const are block-scoped",
    ],
    correctOption: "var is function-scoped, let and const are block-scoped",
    points: 10,
  },
  {
    question: "Explain the difference between == and === in JavaScript?",
    options: [
      "== compares both value and type, === compares only value",
      "== checks for strict equality, === checks for type coercion",
      "== checks for equality after type coercion, === checks for strict equality",
      "== checks for equality without type coercion, === checks for strict equality",
    ],
    correctOption:
      "== checks for equality after type coercion, === checks for strict equality",
    points: 10,
  },
  {
    question: "What does the this keyword refer to in JavaScript?",
    options: [
      "this refers to the object to which the current code belongs",
      "this refers to the object that called the current function",
      "this refers to the global object",
      "this refers to the function itself",
    ],
    correctOption:
      "this refers to the object to which the current code belongs",
    points: 10,
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<hyperlink>"],
    correctOption: "<a>",
    points: 10,
  },
  {
    question: "What are the different data types in JavaScript?",
    options: [
      "number, string, boolean, null, undefined, object, symbol",
      "integer, float, char, string, array, object",
      "int, double, char, boolean, object",
      "number, string, boolean, undefined, array, object",
    ],
    correctOption: "number, string, boolean, null, undefined, object, symbol",
    points: 10,
  },
  {
    question: "What is the correct HTML tag for inserting a line break?",
    options: ["<break>", "<lb>", "<br>", "<newline>"],
    correctOption: "<br>",
    points: 10,
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["color", "text-color", "font-color", "text-style"],
    correctOption: "color",
    points: 10,
  },
  {
    question: "What is the correct way to center-align text in CSS?",
    options: [
      "align: center",
      "text-align: center",
      "center-text: true",
      "text-center: true",
    ],
    correctOption: "text-align: center",
    points: 10,
  },
];
const maxpoints = question.reduce((acc, curr) => acc + curr.points, 0);
const questionLength = question.length;
const initialstate = {
  answer: null,
  points: 0,
  index: 0,

  mystatus: "ready",
  secondRemaining: 600,
  allpoints: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "active":
      return { ...state, mystatus: "active" };
    case "newanswer":
      return {
        ...state,
        answer: action.payload,
      };
    case "nextQuestion":
      const questionsnext = question[state.index];
      let points = state.points;

      if (questionsnext.correctOption === state.answer) {
        points = points + questionsnext.points;
      }

      return {
        ...state,
        index: state.index + 1,
        answer: null,
        points,
      };
    case "finishedQuetions":
      const finishedquestion = question[state.index];
      let allpoints = state.points;

      if (finishedquestion.correctOption === state.answer) {
        allpoints = allpoints + finishedquestion.points;
      }
      return {
        ...state,
        mystatus: "finished",
        allpoints,
      };
    case "timer":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        mystatus: state.secondRemaining === 0 ? "finished" : state.mystatus,
      };
    case "restart":
      return { ...initialstate, mystatus: "ready" };
    default:
      throw new Error("Error");
  }
}
function App() {
  //const [mystatus, setMystatus] = useState("ready");
  // const [correctans, setCorrect] = useState([]);

  const [
    { answer, index, points, mystatus, secondRemaining, allpoints },
    dispatch,
  ] = useReducer(reducer, initialstate);
  return (
    <div>
      <Header />
      <Main>
        {mystatus === "ready" && (
          <Startscreen questionLength={questionLength} dispatch={dispatch} />
        )}
        {mystatus === "active" && (
          <>
            <Progressbar
              index={index}
              questionLength={questionLength}
              points={points}
              maxpoints={maxpoints}
            />
            <Question
              question={question[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <div className="flex items-center justify-center text-center transition duration-150">
              <div>
                <Timer secondRemaining={secondRemaining} dispatch={dispatch} />
              </div>

              <div className="ml-52">
                <Next
                  answer={answer}
                  dispatch={dispatch}
                  index={index}
                  questionLength={questionLength}
                />
              </div>
            </div>
          </>
        )}
        {mystatus === "finished" && (
          <Finishedscreen
            allpoints={allpoints}
            maxpoints={maxpoints}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
