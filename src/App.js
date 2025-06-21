import React, { useReducer, useState } from "react";
import Counter from "./Counter";
import { myContext } from "./Mycontext";

const App = () => {
  function reducerFunction(state, action) {
    if (action.type === "increment") {
      return {
        count: state.count + 1,
      };
    } else if (action.type === "decrement") {
      return {
        count: state.count - 1,
      };
    } else {
      return state;
    }
  }

  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducerFunction, initialState); //[state, dispatch] it's like [count, setCount]

  // console.log("state", state);

  return (
    <myContext.Provider value={[state, dispatch]}>
      <Counter />
    </myContext.Provider>
  );
};

export default App;

// What is useReducer()?
// useReducer() is a React Hook used for state management in functional components.
// It is an alternative to useState when you have complex state logic that involves multiple sub-values and multiple levels or when the next state depends on the previous state.
// It is similar to the concept of reducers in Redux.
