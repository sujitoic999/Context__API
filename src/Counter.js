import React, { useContext } from "react";
import { myContext } from "./Mycontext";

const Counter = () => {
  const { state, dispatch } = useContext(myContext);
  return (
    <div>
      Counter: {state.count}
      <br></br>
      Name: {state.name}
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ action: "decrement" }); // need to observe
          }}
        >
          Decrement
        </button>
        <br></br>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            dispatch({ name: "update last name" });
          }}
        >
          Name Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
