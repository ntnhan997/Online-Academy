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
  RATING_USER_COURSE,
  GET_BUY_COURSE,
  LECTURE_COURSE_LIST,
  COURSE_SUGGESTION_REQUEST,
  COURSE_SUGGESTION_SUCCESS,
  COURSE_SUGGESTION_FAIL,
  HOTCOURSE_REQUEST_LIST,
  HOTCOURSE_SUCCESS_LIST,
  HOTCOURSE_FAIL_LIST,
  CATEGORY_REQUEST_NAME,
  ENROLL_LIST_REQUEST,
  COURSE_LISTTEACHER_REQUEST
} from "../constants/courseConstants";

import axios from "axios";

const HotCourseAction = () => async (dispatch) => {
  try {
    dispatch({ type: HOTCOURSE_REQUEST_LIST });
    const data = await axios.get("/api/course/hotcourse");
    dispatch({ type: HOTCOURSE_SUCCESS_LIST, payload: data.data });
  } catch (error) {
    dispatch({ type: HOTCOURSE_FAIL_LIST, payload: error });
  }
};

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
    await axios.put("/api/course/incrementviews", { CourseId });
    // dispatch({ type: INCREMENT_VIEW_COURSE, payload: data.data });
  } catch (error) {}
};

const ratingAction = (CourseID, Score) => async (dispatch) => {
  try {
    Score = Number(Score);
    await axios.post(
      "/api/rating/",
      { CourseID, Score },
      {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA"))
            .accessToken,
        },
      }
    );
    // dispatch({ type: INCREMENT_VIEW_COURSE, payload: data.data });
  } catch (error) {}
};

const getRatingUserAction = (CourseID) => async (dispatch) => {
  try {
    const data = await axios.get("/api/rating/" + CourseID, {
      headers: {
        "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA"))
          .accessToken,
      },
    });
    dispatch({ type: RATING_USER_COURSE, payload: data.data });
  } catch (error) {}
};

const getBuyCourseAction = (CourseID) => async (dispatch) => {
  try {
    const data = await axios.get("/api/subscribedcourse/" + CourseID, {
      headers: {
        "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA"))
          .accessToken,
      },
    });
    dispatch({ type: GET_BUY_COURSE, payload: data.data });
  } catch (error) {}
};

const BuyCourseAction = (CourseID) => async (dispatch) => {
  try {
    await axios.post(
      "/api/subscribedcourse/",
      { CourseID },
      {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA"))
            .accessToken,
        },
      }
    );
    await axios.put(
      "/api/addregistered/",
      { CourseID }
    );
    const data = await axios.get("/api/subscribedcourse/" + CourseID, {
      headers: {
        "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA"))
          .accessToken,
      },
    });
    dispatch({ type: GET_BUY_COURSE, payload: data.data });
  } catch (error) {}
};

const lectureAction = (CourseID) => async (dispatch) => {
  try {
    const data = await axios.get("/api/lecture/" + CourseID, {
      headers: {
        "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA"))
          .accessToken,
      },
    });
    dispatch({ type: LECTURE_COURSE_LIST, payload: data.data });
  } catch (error) {}
};

const lectureActionNoUser = (CourseID) => async (dispatch) => {
  try {
    const data = await axios.get("/api/lecture/nouser/" + CourseID);
    dispatch({ type: LECTURE_COURSE_LIST, payload: data.data });
  } catch (error) {}
};

const CourseSuggestionAction = (CategoryID) => async (dispatch) => {
  try {
    dispatch({ type: COURSE_SUGGESTION_REQUEST });
    const data = await axios.get("/api/course/coursesuggestion/" + CategoryID);
    dispatch({ type: COURSE_SUGGESTION_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: COURSE_SUGGESTION_FAIL, payload: error });
  }
};

const CreateCourseByTeacherAction = (Course, Lecture) => async (dispatch) => {
  try {
    Course = {
      CourseName: Course.courseName,
      CourseImage: Course.courseImage,
      CourseSummary: Course.courseSummary,
      CoursePrice: Course.coursePrice,
      CourseDescriptions: Course.courseDescriptions,
      CourseStatus: Course.courseStatus === "true" ? 1 : 0,
      CategoryID: Course.categoryName
    }
    Lecture.map(item => {
        return item.LecturePreview = item.LecturePreview === "true" ? 1: 0
    })
    Lecture.map(item => delete item.id);
    await axios.post("/api/lecture/createbyteacher", {Course,Lecture}, {
      headers: {
        "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA"))
          .accessToken,
      },
    });
    // dispatch({ type: COURSE_SUGGESTION_SUCCESS, payload: data.data });
  } catch (error) {
  }
};


const GetNameCategoryAction = () => async (dispatch) => {
  try {
    const data = await axios.get("/api/category/");
    dispatch({ type: CATEGORY_REQUEST_NAME, payload: data.data });
  } catch (error) {

  }
};

const EnrolledListAction = () => async (dispatch) => {
  try {
    const data = await axios.get("/api/subscribedcourse/", {
      headers: {
        "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA"))
          .accessToken,
      }
    });
    dispatch({ type: ENROLL_LIST_REQUEST, payload: data.data });
  } catch (error) {

  }
};

const ListCourseTeacherAction = () => async (dispatch) => {
  try {
    const data = await axios.get("/api/teacher/", {
      headers: {
        "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA"))
          .accessToken,
      }
    });
    dispatch({ type: COURSE_LISTTEACHER_REQUEST, payload: data.data });
  } catch (error) {

  }
};





export {
  TopCourseViews,
  TopCourseRegistered,
  TopCoursenNew,
  IncrementViewAction,
  ratingAction,
  getRatingUserAction,
  getBuyCourseAction,
  BuyCourseAction,
  lectureAction,
  lectureActionNoUser,
  CourseSuggestionAction,
  HotCourseAction,
  CreateCourseByTeacherAction,
  GetNameCategoryAction,
  EnrolledListAction,
  ListCourseTeacherAction
};
