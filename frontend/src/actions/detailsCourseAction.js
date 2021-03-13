import {
    DETAILS_REQUEST_COURSE,
    COMMENT_REQUEST_COURSE

  } from "../constants/detailsCourseConstants";
  
  import axios from "axios";
  
  const detailsCourseAction = (CourseID) => async (dispatch) => {
    try {
      const data = await axios.get("/api/course/" + CourseID);
      dispatch({ type: DETAILS_REQUEST_COURSE, payload: data.data });
    } catch (error) {
    }
  };

  const commentCourseAction = (CourseID) => async (dispatch) => {
    try {
      const data = await axios.get("/api/comment/" + CourseID);
      dispatch({ type: COMMENT_REQUEST_COURSE, payload: data.data });
      console.log(data.data);
    } catch (error) {
    }
  };
  export { detailsCourseAction, commentCourseAction };
  