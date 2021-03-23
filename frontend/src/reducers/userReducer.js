import {CONFIRM_OTP, USER_REGISTER_REQUEST, USER_LOGIN_REQUSET ,USER_GETBYID_REQUEST, UPDATE_USER_REQUEST} from "../constants/userConstants";


const ConfirmOTPReducer = (state = { ConfirmOTP: {} }, action )=>{
    switch(action.type){
        case CONFIRM_OTP: 
            return {loading: false, ConfirmOTP: action.payload};
        default:
            return state;
    }
};

const RegisterReducer = ( state = { register: {} }, action) => {
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {register: action.payload};
        default:
            return state;
    }
}


const LogInReducer = ( state = { users: {} }, action) => {
    switch(action.type){
        case USER_LOGIN_REQUSET:
            return {users: action.payload};
        default:
            return state;
    }
}


const UserByIdReducer = ( state = { getUserById: {} }, action) => {
    switch(action.type){
        case USER_GETBYID_REQUEST:
            return {getUserById: action.payload};
        default:
            return state;
    }
}



const UpdateUserReducer = ( state = { checkUpdateUser: {} }, action) => {
    switch(action.type){
        case UPDATE_USER_REQUEST:
            return {checkUpdateUser: action.payload};
        default:
            return state;
    }
}


export {ConfirmOTPReducer, RegisterReducer,LogInReducer, UserByIdReducer, UpdateUserReducer}