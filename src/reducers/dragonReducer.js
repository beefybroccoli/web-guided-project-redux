export const initialState = {
  newMember: '',
  members: [
    { name: 'Jojo Zhang', dragonStatus: true },
    { name: 'Brandon Harris', dragonStatus: false }
  ]
}

export const dragonReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MEMBER': 
      return {

        ...state,
        members: [...state.members, {name: action.payload, dragonStatus: false}]
      }
    
    default: 
      return state;
  }
}

