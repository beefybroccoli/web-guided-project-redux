import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux';

import reducer from './reducers';
// import titleReducer from './reducers/titleReducer';
// import dragonReducer from './reducers/dragonReducer'

import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';

const appStore = createStore(dragonReducer)

console.log('store:', appStore.getState());

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Title />
        <DragonList />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
