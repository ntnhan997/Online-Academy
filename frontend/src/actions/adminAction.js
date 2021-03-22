import {
    ADMIN_LISTED_TEACHER
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
  
  export { CreateUserAction, ListedTeacherAction };
  