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

//connect() return a function, which inject props into component
export default connect(mapStateToProps, mapActionToProps)(Title);
