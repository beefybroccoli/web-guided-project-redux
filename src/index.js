import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'

import titleReducer from './reducers/titleReducer';

import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';

const store = createStore(titleReducer)

console.log('store:', store);

function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
