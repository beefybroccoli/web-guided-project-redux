import React from 'react';
// import React, { useReducer } from 'react';
import { connect } from 'react-redux';

// import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  // const [state, dispatch] = useReducer(titleReducer, initialState);
  console.log('Title Props:', props);

  const handleToggleEditing = () => {
    props.toggleEditing();
  }

  const handleTitleUpdate = (title) => {
    props.updateTitle(title);
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
    title: state.title.title,
    editing: state.title.editing,
    appName: state.title.appName,
    favNumber: state.title.favNumber,
    epicNumber,
  })
}

// const mapDispatchToProps = {
//   toggleEditing,
//   updateTitle
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Title);
export default connect(mapStateToProps, { toggleEditing, updateTitle })(Title);
// export default connect(null, { toggleEditing, updateTitle })(Title);
