import {CONFIRM_OTP} from "../constants/userConstants";


const ConfirmOTPReducer = (state = { ConfirmOTP: {} }, action )=>{
    switch(action.type){
        case CONFIRM_OTP: 
            return {loading: false, ConfirmOTP: action.payload};
        default:
            return state;
    }
};

export {ConfirmOTPReducer}