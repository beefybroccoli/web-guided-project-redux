import React from "react";
import ReactDOM from "react-dom";

import Title from "./components/Title";
import DragonList from "./components/DragonList";
import "./styles.css";
//import createStore from redux
import { createStore } from "redux";
// import Provider from react-redux
import { Provider } from "react-redux";
//import reducer
import reducer from "./reducers/titleReducer";

const store = createStore(reducer);
console.log(store);
console.log()
function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
