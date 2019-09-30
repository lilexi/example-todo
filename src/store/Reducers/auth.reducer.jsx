const initialState = {
  User: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, User: action.payload };
    case "SIGN_UP":
      return { ...state, User: action.payload };
    default:
      return state;
  }
}
