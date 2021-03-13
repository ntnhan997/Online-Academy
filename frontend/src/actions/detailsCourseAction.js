import {
    DETAILS_REQUEST_COURSE,

  } from "../constants/detailsCourseConstants";
  
  import axios from "axios";
  
  const detailsCourseAction = (CourseID) => async (dispatch) => {
    try {
      const data = await axios.get("/api/course/" + CourseID);
      dispatch({ type: DETAILS_REQUEST_COURSE, payload: data.data });
      console.log(data.data);
    } catch (error) {
    }
  };

  
  export { detailsCourseAction };
  