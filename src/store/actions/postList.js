import axios from "axios";
export const GET_POSTS = "GET_POSTS";

export const getPosts = () => {
  return async (dispatch) => {

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    dispatch({
      type: GET_POSTS,
      payload: response.data.slice(0, 5)
    });
  };
};
