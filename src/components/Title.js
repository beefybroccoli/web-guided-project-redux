import React, { useReducer } from 'react';
import { connect } from 'react-redux';

import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  const [state, dispatch] = useReducer(titleReducer, initialState);
  console.log('Title Props:', props);

  const handleToggleEditing = () => {
    dispatch(toggleEditing());
  }

  const handleTitleUpdate = (title) => {
    dispatch(updateTitle(title));
  }

  return (
    <div>
      <h1>{props.appName}</h1>
      {
        !props.editing ? 
          <TitleDisplay title={props.title} handleToggleEditing={handleToggleEditing}/>: 
          <TitleForm handleTitleUpdate={handleTitleUpdate}/>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  const epicNumber = state.favNumber * 11
  return ({
    title: 'Ironman',
    editing: state.editing,
    appName: state.appName,
    favNumber: state.favNumber,
    epicNumber,
  })
}

export default connect(mapStateToProps)(Title);
