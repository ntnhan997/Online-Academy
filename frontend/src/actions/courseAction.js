import { COURSE_REQUEST_LIST, COURSE_SUCCESS_LIST, COURSE_FAIL_LIST } from '../constants/courseConstants';

import axios from "axios";

const TopCourseViews = () => async (dispatch) => {
    try {
        dispatch({type : COURSE_REQUEST_LIST});
        const data = await axios.get("/api/course/numberofviews");
        dispatch({type: COURSE_SUCCESS_LIST, payload: data.data});
    } catch (error) {
        dispatch({type: COURSE_FAIL_LIST, payload: error});  
    }
}

export {TopCourseViews}