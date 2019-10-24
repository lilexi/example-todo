import axios from "axios";
const url = "http://localhost:3001/";

export const verify = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      axios
        .post(url + "home/verify", {
          token: token
        })
        .then(function(response) {
          dispatch(loginUser(response.data.data));
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };
};

const loginUser = userObj => ({
  type: "VERIFY",
  payload: userObj
});
