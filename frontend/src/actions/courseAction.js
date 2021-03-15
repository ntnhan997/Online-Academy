import {
  COURSE_REQUEST_LIST,
  COURSE_SUCCESS_LIST,
  COURSE_FAIL_LIST,
  TOPCOURSEREGISTERED_FAIL_LIST,
  TOPCOURSEREGISTERED_SUCCESS_LIST,
  TOPCOURSEREGISTERED_REQUEST_LIST,
  TOPCOURSENEW_REQUEST_LIST,
  TOPCOURSENEW_SUCCESS_LIST,
  TOPCOURSENEW_FAIL_LIST,
  RATING_USER_COURSE
} from "../constants/courseConstants";

import axios from "axios";

const TopCourseViews = () => async (dispatch) => {
  try {
    dispatch({ type: COURSE_REQUEST_LIST });
    const data = await axios.get("/api/course/numberofviews");
    dispatch({ type: COURSE_SUCCESS_LIST, payload: data.data });
  } catch (error) {
    dispatch({ type: COURSE_FAIL_LIST, payload: error });
  }
};

const TopCourseRegistered = () => async (dispatch) => {
  try {
    dispatch({ type: TOPCOURSEREGISTERED_REQUEST_LIST });
    const data = await axios.get("/api/course/mostregisteredcourses");
    dispatch({ type: TOPCOURSEREGISTERED_SUCCESS_LIST, payload: data.data });
  } catch (error) {
    dispatch({ type: TOPCOURSEREGISTERED_FAIL_LIST, payload: error });
  }
};

const TopCoursenNew = () => async (dispatch) => {
  try {
    dispatch({ type: TOPCOURSENEW_REQUEST_LIST });
    const data = await axios.get("/api/course/top10newcourse");
    dispatch({ type: TOPCOURSENEW_SUCCESS_LIST, payload: data.data });
  } catch (error) {
    dispatch({ type: TOPCOURSENEW_FAIL_LIST, payload: error });
  }
};

const IncrementViewAction = (CourseId) => async (dispatch) => {
  try {
    await axios.put("/api/course/incrementviews", {CourseId});
    // dispatch({ type: INCREMENT_VIEW_COURSE, payload: data.data });
  } catch (error) {
    
  }
} 


const ratingAction = (CourseID, Score) => async (dispatch) => {
  try {
    await axios.post("/api/rating/", {CourseID, Score}, {
      headers :{
        "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA")).accessToken
      }
    });
    // dispatch({ type: INCREMENT_VIEW_COURSE, payload: data.data });
  } catch (error) {
    
  }
} 


const getRatingUserAction = (CourseID) => async(dispatch) => {
  try {
    const data = await axios.get("/api/rating/" + CourseID, {
      headers :{
        "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA")).accessToken
      }
    });
    console.log(data.data);
    dispatch({ type: RATING_USER_COURSE, payload: data.data });
  } catch (error) {
    
  }
}


export { TopCourseViews, TopCourseRegistered, TopCoursenNew, IncrementViewAction, ratingAction, getRatingUserAction };
