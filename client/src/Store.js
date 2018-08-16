import {createStore,compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducer from './Reducers/AllReducers';


const store = createStore(allReducer,compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default  store;