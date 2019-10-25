const initialState = {
  TODO: {},
  Status: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, Status: action.payload };
    case "GET_TODO":
      return { ...state, TODO: action.payload, Status: "Success" };
    default:
      return state;
  }
}
