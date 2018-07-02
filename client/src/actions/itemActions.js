//itemActions.js
import axios from "axios";
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM,ITEMS_LOADING} from "./types";

export const getItems = ()=> dispatch => {
	dispatch(setItemsLoading());// flag so that we know db is accessing the data
	axios
		.get('/api/items')
		.then(res => 
			dispatch({
				type:GET_ITEMS,
				payload: res.data
			})
		)
};

export const deleteItem = (id)=> dispatch => {
	axios
		.delete('/api/items/'+id)
		.then(res => 
			dispatch({
				type:DELETE_ITEM,
				payload: id
			})
		)
};

export const addItem = (item)=> dispatch => {

	axios
		.post('/api/items',item)// posts to the db
		.then(res => 
			dispatch({
				type:ADD_ITEM,// dispatches a call to update the view
				payload: item// newest item to add to the view
			})
		)
};

export const setItemsLoading = () => {
	return {
		type:ITEMS_LOADING, 
	};
};