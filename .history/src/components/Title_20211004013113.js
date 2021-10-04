import React, { useState, useReducer } from "react";

import titleReducer, { initialState } from "../reducers/titleReducer";
import { toggleEditing, updateTitle } from "./../actions/titleActions";

import TitleDisplay from "./TitleDisplay";
import TitleForm from "./TitleForm";
//import connect from react-redux
import { connect } from "react-redux";

const Title = () => {
  const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleToggleEditing = () => {
    dispatch(toggleEditing());
  };

  const handleTitleUpdate = (title) => {
    dispatch(updateTitle(title));
  };

  return (
    <div>
      <h1>{state.appName}</h1>
      {!state.editing ? (
        <TitleDisplay
          title={state.title}
          handleToggleEditing={handleToggleEditing}
        />
      ) : (
        <TitleForm handleTitleUpdate={handleTitleUpdate} />
      )}
    </div>
  );
};


const mapStateToProps = ()=>{
  return
}

//connect() return a function, which inject props into component
//mapStateToProps : a function that gets the current state and injects returned values into the wrapped component
//mapActionToProps : an object that injects action creators into props of the component and automatically dispatches these action 
export default connect(mapStateToProps, mapActionToProps)(Title);
