import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //console.log("About the fetch posts");
  await dispatch(fetchPosts());
  //console.log(getState().posts);
  //console.log("Posts fetched");

  const userIds = _.uniq(_.map(getState().posts, "userId"));
  //console.log(UserIds);
  userIds.forEach(id => dispatch(fetchUser(id)));

  /*
  _chain(getState(), posts)
    .map("UserId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
*/
};
