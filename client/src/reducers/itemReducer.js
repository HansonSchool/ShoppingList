
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from "../actions/types";

//////// Soooo, this understanding might change, but I think that the reducer is a lot like the 
//////// router in the other project I did.  Took a while to get there...  


// initial state is empty array and flag to indicate whether loading or not.
// This array is populated by the the backend (mongoDB) when GET_ITEMS is called.
const initialState = {
	items :[],
	loading:false,
	
};

export default function(state = initialState,action){
	switch(action.type){
		case GET_ITEMS:
			return {
				...state,
				items:action.payload,
				loading:false
			};
		case DELETE_ITEM:
			return {
				...state,
				items:state.items.filter(item => item._id != action.payload)// sets items to a new array not containing action.payload
			}
		case ADD_ITEM:
			return{
				...state,
				items:[action.payload, ...state.items]// sets items to a new array with old stuff plus the newest item
			}
		case ITEMS_LOADING:
			return{
				...state,
				loading:true
			};
		default:
			return state;
		
	}
};

//export  default itemReducer;