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

//create a store
const store = createStore(reducer);
console.log(store);
console.log("store.getState() = ", store.getState());
function App() {
  return (
    //connect application to the store
    <Provider store={store}>
      <div className="App">
        <Title />
        <DragonList />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
//connect app 
ReactDOM.render(<App />, rootElement);
