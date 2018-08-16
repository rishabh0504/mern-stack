import {combineReducers} from 'redux';
import items from './ShoppingItem.Reducer';



const allReducer = combineReducers({
	products : items
})

export default allReducer;