import {
    ADMIN_LISTED_TEACHER,
    ADMIN_LISTED_STUDENT
  } from "../constants/AdminConstants";
  


const ListedTeacherReducer = (state = { listedTeachers: [] }, action )=>{
    switch(action.type){
        case ADMIN_LISTED_TEACHER: 
            return { listedTeachers: action.payload};
        default:
            return state;
    }
};

const ListedStudentReducer = (state = { listedStudents: [] }, action )=>{
    switch(action.type){
        case ADMIN_LISTED_STUDENT: 
            return { listedStudents: action.payload};
        default:
            return state;
    }
};


export {ListedTeacherReducer, ListedStudentReducer}