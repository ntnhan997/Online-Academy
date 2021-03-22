import {
    ADMIN_LISTED_TEACHER
  } from "../constants/AdminConstants";
  


const ListedTeacherReducer = (state = { listedTeachers: [] }, action )=>{
    switch(action.type){
        case ADMIN_LISTED_TEACHER: 
            return { listedTeachers: action.payload};
        default:
            return state;
    }
};


export {ListedTeacherReducer}