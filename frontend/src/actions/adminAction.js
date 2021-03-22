import {
    ADMIN_CREATE_USER
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
  
  export { CreateUserAction };
  