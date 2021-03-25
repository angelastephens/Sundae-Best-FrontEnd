import { combineReducers } from "redux";
import sundaesReducer from "./sundaes";

export default combineReducers({
  sundaes: sundaesReducer
});
