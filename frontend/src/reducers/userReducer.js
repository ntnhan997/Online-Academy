import {CONFIRM_OTP, USER_REGISTER_REQUEST} from "../constants/userConstants";


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

export {ConfirmOTPReducer, RegisterReducer}