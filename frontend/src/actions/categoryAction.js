import {
    CATEGORY_COURSE_REQUEST
  } from "../constants/categoryConstants";
  
  import axios from "axios";
  
  const CourseByCategoryAction = (CategoryID) => async (dispatch) => {
    try {
      const data = await axios.get("/api/category/" + CategoryID);
      dispatch({ type: CATEGORY_COURSE_REQUEST, payload: data.data });
    } catch (error) {
    }
  };
  
  export {
    CourseByCategoryAction
  };
  