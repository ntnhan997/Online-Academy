import {CONFIRM_OTP, USER_REGISTER_REQUEST} from "../constants/userConstants";

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

const RegisterUserAction = (user) => async (dispatch) => {
    try {
        const data = await axios.post("/api/user/register", {
            UserName: user.userName,
            Password: user.password,
            FullName: user.fullName,
            Email: user.email
        });
        dispatch({type : USER_REGISTER_REQUEST, payload: data.data});
    } catch (error) {
        
    }
}

export {requestOTP, confirmOTP, RegisterUserAction}