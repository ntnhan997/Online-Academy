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

export { TopCourseViews, TopCourseRegistered, TopCoursenNew };
