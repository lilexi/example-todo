import * as hideActions from "../actions/actionsType/hideTypes";

let hideState = {
  showRegister: false,
  showLogin: false
};

const onShowRegister = (state, action) => {
  const newState = { showRegister: true };
  return newState;
};

const onHideRegister = (state, action) => {
  const newState = { showRegister: false };
  return newState;
};

const onShowLogin = (state, action) => {
  const newState = { showLogin: true };
  return newState;
};

const onHideLogin = (state, action) => {
  const newState = { showLogin: false };
  return newState;
};

const reducer = (state = hideState, action) => {
  switch (action.type) {
    case hideActions.SHOW_REGISTER:
      return onShowRegister(state, action);
    case hideActions.HIDE_REGISTER:
      return onHideRegister(state, action);
    case hideActions.SHOW_LOGIN:
      return onShowLogin(state, action);
    case hideActions.HIDE_LOGIN:
      return onHideLogin(state, action);
    default:
      return state;
  }
};

export default reducer;
