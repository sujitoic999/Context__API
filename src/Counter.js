import React, { useContext } from "react";
import { myContext } from "./Mycontext";

const Counter = () => {
  const { state, dispatch } = useContext(myContext);
  return (
    <div>
      Counter: {state.count}
      <div>
        <button
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement" });
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
      </div>
    </div>
  );
};

export default Counter;
