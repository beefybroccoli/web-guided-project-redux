
import React from 'react';
import DragonMember from './DragonMember';

import {connect} from 'react-redux'

class DragonList extends React.Component {
  state = {
    newMember: ''
  }
  // state = {
  //   newMember: '',
  //   members: [
  //     { name: 'Jojo Zhang', dragonStatus: true },
  //     { name: 'Brandon Harris', dragonStatus: false }
  //   ]
  // };

  handleChanges = e => {
    this.setState({ ...this.state, newMember: e.target.value });
  };

  handleClick = ()=> {
    this.props.addMember(this.state.newMember)
  }

  render() {
    return (
      <div>
        <div className="friends-list">
          {state.members.map((member, index) => (
            <DragonMember key={index} member={member}/>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={this.handleClick}>Add member</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    members: state.dragon.members
  })
} 

export default connect(mapStateToProps, {addMember})(DragonList);
