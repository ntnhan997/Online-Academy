import thunk from "redux-thunk";
import {combineReducers , createStore, applyMiddleware, compose} from 'redux';

import {TopNumberViewsReducer,
    TopCourseRegisteredReducer,
    TopCourseNewReducer,
    RatingUserReducer,
    GetBuyCourseReducer,
    LectureReducer
} from "./reducers/courseReducer";
import { ConfirmOTPReducer, LogInReducer, RegisterReducer } from "./reducers/userReducer";

import {CheckWishListReducer, wishListReducer} from "./reducers/wishListReducer";
import { SearchReducer } from "./reducers/searchReducer";
import { CommentCourseReducer, DetailsCourseReducer } from "./reducers/detailsCourseReducer";

const users = JSON.parse(localStorage.getItem("accessToken_OA")) || null;
const initialState = {loginUser: {users}};

const reducer = combineReducers({
    listView: TopNumberViewsReducer,
    topCourseRegisterList: TopCourseRegisteredReducer,
    topCourseNewList :TopCourseNewReducer,
    confirmOTP: ConfirmOTPReducer,
    registerUser: RegisterReducer,
    loginUser: LogInReducer,
    wishList: wishListReducer,
    searchList: SearchReducer,
    detailsList: DetailsCourseReducer,
    commentList: CommentCourseReducer,
    rating: RatingUserReducer,
    getBuyCourse: GetBuyCourseReducer,
    lectureCourse: LectureReducer,
    checkWL: CheckWishListReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;