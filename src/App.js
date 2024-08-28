import React, { useReducer } from "react";
import Counter from "./Counter";
import { myContext } from "./Mycontext";

const App = () => {
  const reducerFunction = (state, action) => {
    console.log(action);
    console.log(state);

    if (action.type === "increment") {
      return { count: state.count + 1 };
    } else if (action.action === "decrement") {
      // need to observe
      return { count: state.count - 1 };
    } else if (action.type === "reset") {
      return { count: 0, name: "Sujit" };
    } else if (action.name === "update last name") {
      return { count: state.count, name: state.name + "upadhyay" };
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, {
    count: 0,
    name: "Sujit",
  });
  return (
    <div>
      <myContext.Provider value={{ state, dispatch }}>
        <Counter />
      </myContext.Provider>
    </div>
  );
};

export default App;
