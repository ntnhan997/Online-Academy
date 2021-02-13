import thunk from "redux-thunk";
import {combineReducers , createStore, applyMiddleware, compose} from 'redux';
import {wishListReducer} from "./reducers/wishListReducer";


const initialState = {};

const reducer = combineReducers({
    wishList: wishListReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;