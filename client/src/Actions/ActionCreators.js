import {FETCH_ITEMS,ADD_ITEM,DELETE_ITEM,UPDATE_ITEM,ITEMS_LOADING}  from './ActionTypes'



export const fetchItems = () =>{
	return {
		type:FETCH_ITEMS
	}
}

export const addItem = name => {
	return {
		type:ADD_ITEM,
		payload : name
	}
}
export const deleteItem = id => {
	return {
		type:DELETE_ITEM,
		payload : id
	}
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


