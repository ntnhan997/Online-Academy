import thunk from "redux-thunk";
import {combineReducers , createStore, applyMiddleware, compose} from 'redux';

import {TopNumberViewsReducer,
    TopCourseRegisteredReducer,
    TopCourseNewReducer
} from "./reducers/courseReducer";
import { ConfirmOTPReducer, LogInReducer, RegisterReducer } from "./reducers/userReducer";

import {wishListReducer} from "./reducers/wishListReducer";

const users = JSON.parse(localStorage.getItem("accessToken_OA")) || null;
const initialState = {loginUser: {users}};

const reducer = combineReducers({
    listView: TopNumberViewsReducer,
    topCourseRegisterList: TopCourseRegisteredReducer,
    topCourseNewList :TopCourseNewReducer,
    confirmOTP: ConfirmOTPReducer,
    registerUser: RegisterReducer,
    loginUser: LogInReducer,
    wishList: wishListReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;