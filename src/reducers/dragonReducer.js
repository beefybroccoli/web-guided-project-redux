export const initialState = {
  newMember: '',
  members: [
    { name: 'Jojo Zhang', dragonStatus: true },
    { name: 'Brandon Harris', dragonStatus: false }
  ]
}

const dragonReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MEMBER': 
      return {
        ...state
      }
    
    default: 
      return state;
  }
}