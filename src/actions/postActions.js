import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";

export const fetchPosts = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    // .then((res) => res.json())
    // .then((data) => console.log(data));
    .then((res) => {
      dispatch({
        type: FETCH_POSTS,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createPosts = (postData) => (dispatch) => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", postData)
    .then((res) => {
      dispatch({
        type: NEW_POST,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
