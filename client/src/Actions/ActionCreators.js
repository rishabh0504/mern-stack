import {FETCH_ITEMS,ADD_ITEM,DELETE_ITEM,UPDATE_ITEM,ITEMS_LOADING}  from './ActionTypes'

import axios from 'axios';

export const fetchItems = () => dispatch =>{
	dispatch(setItemsLoading());
	axios.get('/api/items')
	.then(res=>{
		dispatch({
			type:FETCH_ITEMS,
			payload : res.data
		});
	})
}

export const addItem = name => dispatch => {
	dispatch(setItemsLoading());
	axios.post('/api/items',{name})
	.then(res=>{
		dispatch({
			type:FETCH_ITEMS,
			payload : res.data
		});
	})
}
export const deleteItem = id =>dispatch => {
	axios.delete(`/api/items/${id}`)
	.then(res =>{
		dispatch({
			type:FETCH_ITEMS,
			payload : res.data
		})
	})
}
export const updateItem = item => {
	return {
		type:UPDATE_ITEM,
		payload : item
	}
}

export const setItemsLoading = () => {
	return {
		type:ITEMS_LOADING,
	}
}


