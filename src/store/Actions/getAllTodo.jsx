import axios from "axios";
const url = "http://localhost:3001/";

export const getAllTodo = (data) => {
  return dispatch => {
      axios
        .post(url + "todo/getAllTodo", {
            token: localStorage.token,
        })
        .then(function(response) {
          dispatch(todo(response.data.data));
        })
        .catch(function(error) {
          console.log(error);
        });
  };
};

const todo = todoObj => ({
  type: "GET_TODO",
  payload: todoObj
});
