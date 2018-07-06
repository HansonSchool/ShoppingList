import {combineReducers} from "redux";
import itemReducer from "./itemReducer";

export default combineReducers({
	stuff:itemReducer
// can add more here after importing
});