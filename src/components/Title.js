import React, { useState, useReducer } from "react";

import titleReducer, { initialState } from "../reducers/titleReducer";
import { toggleEditing, updateTitle } from "./../actions/titleActions";

import TitleDisplay from "./TitleDisplay";
import TitleForm from "./TitleForm";
//import connect from react-redux
import { connect } from "react-redux";

const Title = (props) => {
  // const [state, dispatch] = useReducer(titleReducer, initialState);

  console.log("props = ", props);

  const handleToggleEditing = () => {
    dispatch(toggleEditing());
  };

  const handleTitleUpdate = (title) => {
    dispatch(updateTitle(title));
  };

  return (
    <div>
      {/* consumes resources from mapStateToProps */}
      <h1>{props.appName}</h1>
      {/* consumes resources from mapStateToProps */}
      {!props.editing ? (
        <TitleDisplay handleToggleEditing={handleToggleEditing} />
      ) : (
        <TitleForm handleTitleUpdate={handleTitleUpdate} />
      )}
    </div>
  );
};

//injects props directly into component
const mapStateToProps = (state) => {
  console.log("state = ", state);
  return { appName: state.appName, title: state.title, editing: state.editing };
};

//connect() return a function, which inject props into component
//mapStateToProps : a function that gets the current state and injects returned values into the wrapped component
//mapActionToProps : an object that injects action creators into props of the component and automatically dispatches these action
export default connect(mapStateToProps)(Title);

//mapActionToProps
