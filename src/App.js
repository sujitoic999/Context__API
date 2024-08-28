import React, { useReducer } from "react";
import Counter from "./Counter";
import { myContext } from "./Mycontext";

const App = () => {
  const reducerFunction = (state, action ) => {
    if (action.type === "increment") {
      return { count: state.count + 1 };
    } else if (action.type === "decrement") {
      return { count: state.count - 1 };
    } else if (action.type === "reset") {
      return { count: 0 };
    }else{
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, { count: 0 });
  return (
    <div>
      <myContext.Provider value={{ state, dispatch }}>
        <Counter />
      </myContext.Provider>
    </div>
  );
};

export default App;
