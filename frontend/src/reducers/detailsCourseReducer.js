import {
    DETAILS_REQUEST_COURSE,

  } from "../constants/detailsCourseConstants";
const DetailsCourseReducer = (state = { details: [] }, action )=>{
    switch(action.type){
        case DETAILS_REQUEST_COURSE: 
            return {loading: false, details: action.payload};
        default:
            return state;
    }
};


export {DetailsCourseReducer}