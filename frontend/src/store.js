import thunk from "redux-thunk";
import {combineReducers , createStore, applyMiddleware, compose} from 'redux';

import {TopNumberViewsReducer,
    TopCourseRegisteredReducer,
    TopCourseNewReducer,
    RatingUserReducer,
    GetBuyCourseReducer,
    LectureReducer,
    CourseSuggestionReducer,
    HotCourseReducer,
    GetNameCategoryReducer
} from "./reducers/courseReducer";
import { ConfirmOTPReducer, LogInReducer, RegisterReducer, UpdateUserReducer, UserByIdReducer } from "./reducers/userReducer";

import {CheckWishListReducer, wishListReducer} from "./reducers/wishListReducer";
import { SearchReducer } from "./reducers/searchReducer";
import { CommentCourseReducer, DetailsCourseReducer } from "./reducers/detailsCourseReducer";
import { ListedTeacherReducer } from "./reducers/adminReducer";

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
    checkWL: CheckWishListReducer,
    courseSuggestions: CourseSuggestionReducer,
    hotCourseList: HotCourseReducer,
    listedTeacher: ListedTeacherReducer,
    getCategoryName: GetNameCategoryReducer,
    getUserId: UserByIdReducer,
    checkUpdateUser : UpdateUserReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;