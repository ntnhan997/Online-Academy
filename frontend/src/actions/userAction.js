import {CONFIRM_OTP, USER_REGISTER_REQUEST, USER_LOGIN_REQUSET} from "../constants/userConstants";

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

const LogInAction = (user) => async (dispatch) => {
    try {
        const data = await axios.post("/api/auth", {
            UserName: user.userName,
            Password: user.password
        });
        dispatch({type : USER_LOGIN_REQUSET, payload: data.data});
        localStorage.setItem("accessToken_OA", JSON.stringify(data.data));
    } catch (error) {
        
    }
}

const LogOut =() =>  async(dispatch) => {
    try {
        dispatch({type : USER_LOGIN_REQUSET, payload: null });
    } catch (error) {
        
    }
}


const RefreshTokenAction = (Token) => async (dispatch) => {
    try {
        const data = await axios.post("/api/auth/refresh", {
            accessToken: Token.accessToken,
            refreshToken: Token.refreshToken
        });
        dispatch({type : USER_LOGIN_REQUSET, payload: data.data});
        localStorage.removeItem("accessToken_OA");
        data.data.refreshToken = Token.refreshToken;
        data.data.authenticated = true;
        console.log(data.data);
        localStorage.setItem("accessToken_OA", JSON.stringify(data.data));
    } catch (error) {
        
    }
}

export {requestOTP, confirmOTP, RegisterUserAction ,LogInAction, LogOut, RefreshTokenAction}