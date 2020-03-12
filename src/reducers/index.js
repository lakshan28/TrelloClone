//This component export to store/index.js

import { combineReducers } from "redux";
import listsReducer from "./listsReducer";

export default combineReducers({
  lists: listsReducer
});
