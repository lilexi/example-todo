import axios from "axios";
import * as regTypes from "../actionsType/regTypes";

const regStarted = () => {
  return {
    type: regTypes.REG_START
  };
};

const regFailed = err => {
  return {
    type: regTypes.REG_FAILED,
    err
  };
};
const regSuccess = data => {
  return {
    type: regTypes.REG_SUCCESS,
    data
  };
};

export const register = userData => {
  return dispatch => {
    dispatch(regStarted());
    axios
      .post("http://localhost:3001/registration", userData)
      .then(res => {
        dispatch(regSuccess(res.data));
      })
      .catch(err => {
        dispatch(regFailed(err));
      });
  };
};
