import axios from "axios";
const url = "http://localhost:3001/";

export const createUser = user => {
  return dispatch => {
    axios
      .post(url + "users/signup", {
        name: user[0],
        email: user[1],
        password: user[2]
      })
      .then(function(response) {
        dispatch(loginUser(response.data.data));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};

const loginUser = userObj => ({
  type: "SIGN_UP",
  payload: userObj
});
