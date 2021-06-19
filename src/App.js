import './App.css';
import { Suspense, useEffect, useReducer, useState } from 'react';
import reducer from './reducer';
import initialState from './initialState';
import Search from './search';
import List from './list';

function App() {

  const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <div style={{backgroundColor: 'black', paddingLeft: '30px'}}>
    <Search state={state} dispatch={dispatch}/>
    <List state={state} />
    </div>
  );
}

export default App;
