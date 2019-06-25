//COULD BE SEPARATE FILES FOR EACH REDUCER FUNCTION OR GROUP OF FUNCTIONS
//AND IMPORT THEM HERE (TO index.js)
/*
import { combineReducers } from "redux";
export default combineReducers({
  dummyKey: () => "dummy value"
});
*/

import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
