import {
    CATEGORY_COURSE_REQUEST
  } from "../constants/categoryConstants";


  const CourseByCategoryReducer = (state = { courseByCategory: [] }, action )=>{
    switch(action.type){
        case CATEGORY_COURSE_REQUEST: 
            return {courseByCategory: action.payload};
        default:
            return state;
    }
};


export {CourseByCategoryReducer}