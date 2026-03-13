import React, { useReducer } from "react";

const initialValue = {
  count: 0,
  age: 18,
  name: "niki",
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "INCREAMENT":
      return {
        ...state,
        count: state.count + action.payload,
      };
      break;
    case "DEACREAMENT":
      return { ...state, count: state.count - action.payload };
    default:
      console.log("დაფიქსირდა შეცდომა");
      break;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "INCREAMENT", payload: 5 });
        }}
      >
        Increase
      </button>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch("DEACREAMENT");
        }}
      >
        Decrease
      </button>

      <p>and the age is : {state.age}</p>
      <h1>and name is {state.name}</h1>
    </>
  );
}

export default App;
