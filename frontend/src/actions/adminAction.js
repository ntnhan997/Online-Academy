import {
    ADMIN_LISTED_TEACHER,
    ADMIN_LISTED_STUDENT,
    ADD_CATEGORY_REQUEST
  } from "../constants/AdminConstants";
  
  import axios from "axios";
  
  
  const CreateUserAction = (user) => async (dispatch) => {
    try {
        await axios.post("/api/admin/", {user}, {
            headers :{
                "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA")).accessToken
              }
        });
    } catch (error) {
    }
  };

  const ListedTeacherAction = () => async (dispatch) => {
    try {
        const list = await axios.get("/api/admin/listedteacher", {
            headers :{
                "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA")).accessToken
              }
        });
        dispatch({ type: ADMIN_LISTED_TEACHER , payload: list.data});
    } catch (error) {
    }
  }; 

  const ListedStudentAction = () => async (dispatch) => {
    try {
        const list = await axios.get("/api/admin/listedstudent", {
            headers :{
                "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA")).accessToken
              }
        });
        dispatch({ type: ADMIN_LISTED_STUDENT , payload: list.data});
    } catch (error) {
    }
  }; 
  
  const AddCategoryAction = (category) => async (dispatch) => {
    try {
        const list = await axios.post("/api/category/",category , {
            headers :{
                "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA")).accessToken
              }
        });
        dispatch({ type: ADD_CATEGORY_REQUEST , payload: list.data});
    } catch (error) {
    }
  }; 
  
  
  export { CreateUserAction, ListedTeacherAction, ListedStudentAction, AddCategoryAction };
  