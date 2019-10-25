import axios from "axios";
const url = "http://localhost:3001/";

export const addTodo = data => {
  return dispatch => {
    axios
      .post(url + "todo/add", {
        token: localStorage.token,
        title: data.title,
        priority: data.priority,
        type: data.type
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
  type: "ADD_TODO",
  payload: todoObj
});
