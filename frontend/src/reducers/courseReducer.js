import { COURSE_REQUEST_LIST, COURSE_SUCCESS_LIST, COURSE_FAIL_LIST, TOPCOURSEREGISTERED_FAIL_LIST,TOPCOURSEREGISTERED_SUCCESS_LIST,TOPCOURSEREGISTERED_REQUEST_LIST, RATING_USER_COURSE, GET_BUY_COURSE, LECTURE_COURSE_LIST, COURSE_SUGGESTION_REQUEST, COURSE_SUGGESTION_SUCCESS, COURSE_SUGGESTION_FAIL, HOTCOURSE_REQUEST_LIST, HOTCOURSE_SUCCESS_LIST, HOTCOURSE_FAIL_LIST } from '../constants/courseConstants';


const HotCourseReducer = (state = { hotCourses: [] }, action )=>{
    switch(action.type){
        case HOTCOURSE_REQUEST_LIST:
            return {loading: true, hotCourses: []};
        case HOTCOURSE_SUCCESS_LIST: 
            return {loading: false, hotCourses: action.payload};
        case HOTCOURSE_FAIL_LIST:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};


const TopNumberViewsReducer = (state = { listViews: [] }, action )=>{
    switch(action.type){
        case COURSE_REQUEST_LIST:
            return {loading: true, listViews: []};
        case COURSE_SUCCESS_LIST: 
            return {loading: false, listViews: action.payload};
        case COURSE_FAIL_LIST:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

const TopCourseRegisteredReducer = (state = { topCourseRegisterLists: [] }, action )=>{ 
    switch(action.type){
        case TOPCOURSEREGISTERED_REQUEST_LIST:
            return {loading: true, topCourseRegisterLists: []};
        case TOPCOURSEREGISTERED_SUCCESS_LIST: 
            return {loading: false, topCourseRegisterLists: action.payload};
        case TOPCOURSEREGISTERED_FAIL_LIST:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

const TopCourseNewReducer = (state = { topCourseNewLists: [] }, action )=>{ 
    switch(action.type){
        case TOPCOURSEREGISTERED_REQUEST_LIST:
            return {loading: true, topCourseNewLists: []};
        case TOPCOURSEREGISTERED_SUCCESS_LIST: 
            return {loading: false, topCourseNewLists: action.payload};
        case TOPCOURSEREGISTERED_FAIL_LIST:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

const CourseSuggestionReducer = (state = { courseSuggestionLists: [] }, action )=>{ 
    switch(action.type){
        case COURSE_SUGGESTION_REQUEST:
            return {loading: true, courseSuggestionLists: []};
        case COURSE_SUGGESTION_SUCCESS: 
            return {loading: false, courseSuggestionLists: action.payload};
        case COURSE_SUGGESTION_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}


const RatingUserReducer = (state = { ratingUser: {} }, action )=>{ 
    switch(action.type){
        case RATING_USER_COURSE:
            return {ratingUser: action.payload};
        default:
            return state;
    }
}

const GetBuyCourseReducer = (state = { getBuy: {} }, action )=>{ 
    switch(action.type){
        case GET_BUY_COURSE:
            return {getBuy: action.payload};
        default:
            return state;
    }
}

const LectureReducer = (state = { lectures: [] }, action )=>{ 
    switch(action.type){
        case LECTURE_COURSE_LIST:
            return {lectures: action.payload};
        default:
            return state;
    }
}


export {
  TopNumberViewsReducer,
  TopCourseRegisteredReducer,
  TopCourseNewReducer,
  RatingUserReducer,
  GetBuyCourseReducer,
  LectureReducer,
  CourseSuggestionReducer,
  HotCourseReducer
};