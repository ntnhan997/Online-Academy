import thunk from "redux-thunk";
import {combineReducers , createStore, applyMiddleware, compose} from 'redux';

import {TopNumberViewsReducer, TopCourseRegisteredReducer} from "./reducers/courseReducer";

const initialState = {};

const reducer = combineReducers({
    listView: TopNumberViewsReducer,
    topCourseRegisterList: TopCourseRegisteredReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;