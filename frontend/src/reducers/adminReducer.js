import {
    ADMIN_LISTED_TEACHER,
    ADMIN_LISTED_STUDENT,
    ADD_CATEGORY_REQUEST
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

const AddCategoryReducer = (state = { addCategory: [] }, action )=>{
    switch(action.type){
        case ADD_CATEGORY_REQUEST: 
            return { addCategory: action.payload};
        default:
            return state;
    }
};


export {ListedTeacherReducer, ListedStudentReducer, AddCategoryReducer}