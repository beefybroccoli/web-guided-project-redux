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

        ...state
        members: [...state.members, action.payload]
      }
    
    default: 
      return state;
  }
}

