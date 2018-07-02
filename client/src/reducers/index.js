import {combineReducers} from "redux";
import itemReducer from "./itemReducer";

export default combineReducers({
	item:itemReducer
// can add more here after importing
});