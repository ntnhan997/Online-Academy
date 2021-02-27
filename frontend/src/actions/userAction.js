import {CONFIRM_OTP} from "../constants/userConstants";

import axios from "axios";

const requestOTP = (UserName, Email) => async () => {
    try {
        await axios.post("/api/user/requestOTP", {UserName, Email});
    } catch (error) {
       console.log("ss");
    }
}

const confirmOTP = (otp) => async (dispatch) => {
    try {
        const data = await axios.post("/api/user/confirmOTP", {otp});
        dispatch({type : CONFIRM_OTP, payload: data.data} );
    } catch (error) {
        
    }
}

export {requestOTP, confirmOTP}