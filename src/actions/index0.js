import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

/*
export const fetchPosts = () => {
  //export const fetchPosts = async () => {
  const promise = jsonPlaceholder.get("/posts");
  //const response = await jsonPlaceholder.get("/posts");
  return {
    type: "FETCH_POSTS",
    payload: promise
  };
};
*/
//BAD APPROACH!!! Solution: redux-thunk
//bad approach with async-await or without async-await because...
//1.with async-await: since api call results do not return immediately,
//fetchPosts return NOTHING/NULL and this causes componentDidMount function call
//in PostList.js throws an error (The caller -componentDidMount- has no idea what will be the response)
//Do not know what will come or has came, do not know the structure of object
//2.without async-await: No errors, no waiting for the api call results
//but at this time no results seen. Since, without async-await, object returned, but no
//data inside, the caller function -componentDidMount in PostList.js- has an idea
//about the response, knows the object structure (type & payload has came), but
//no data inside the payload - because of async-await

/*
export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};
//VERY SIMPLIFIED VERSION BELOW:
*/
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

/*
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
*/
export const fetchUser = id => dispatch => _fetchUSer(id, dispatch);
/*
//the wrapper function below created by using "memoize" function
//of the LOADASH library in order to prevent multiple api calls for the same user...
//*** prevent overfetching
*/
const _fetchUSer = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
