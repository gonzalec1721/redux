import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";

export const fetchPosts = () => (dispatch) => {
  console.log("Fetching");
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
