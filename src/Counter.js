import React, { useContext, useState } from 'react';
import { myContext } from './Mycontext';
import config from './config';

const Counter = () => {
  const [state, dispatch] = useContext(myContext);
  console.log('REACT_APP_API_URL', process.env.REACT_APP_API_URL);
  console.log('config.mode', config.mode);
  console.log('config.apiURL', config.apiUrl);
  console.log('dimpal pandit');
  console.log('Ram Ram Jai Siya Ram');
  console.warn('Sujit Upadhyay');

  return (
    <div>
      <div>Count: {state.count}</div>
      <div>
        <span>
          <button
            onClick={() => {
              dispatch({ type: 'increment' });
            }}
          >
            {'Increment'}
          </button>
        </span>
        <span>
          <button
            onClick={() => {
              dispatch({ type: 'decrement' });
            }}
          >
            {'Decrement'}
          </button>
        </span>
      </div>
    </div>
  );
};

export default Counter;
