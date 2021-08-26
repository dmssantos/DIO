const initialState = {
  list: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, list: [...state.list, action.payload] };
  
    default:
      return state;
  }
}