import axios from "axios";
const url = "http://localhost:3001/";

export const authenticate = user => {
  return dispatch => {
    axios
      .post(url + "users/signin", {
        email: user[1],
        password: user[2]
      })
      .then(function(response) {
        dispatch(loginUser(response.data.data));
        localStorage.setItem("token", response.data.data.token);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};

const loginUser = userObj => ({
  type: "SIGN_IN",
  payload: userObj
});
