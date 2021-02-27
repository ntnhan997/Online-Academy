import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {requestOTP, confirmOTP} from '../actions/userAction';


export default function RegisterUser() {
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [otp,setOTP] = useState("");

  const list = useSelector(state => state.confirmOTP);
  const {ConfirmOTP} = list;

  const dispatch = useDispatch();
    return (
      <div className="register">
        <form action="">
          <ul>
            <li>
              <label htmlFor="">User Name:</label>
              <input type="text" onChange={(e) => setUserName(e.target.value)}/>
            </li>
            <li>
              <label htmlFor="">Password:</label>
              <input type="text" onChange={(e) => setPassword(e.target.value)}/>
            </li>
            <li>
              <label htmlFor="">Full Name:</label>
              <input type="text" onChange={(e) => setFullName(e.target.value)}/>
            </li>
            <li>
              <label htmlFor="">Email:</label>
              <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            </li>
            <li>
              <button type="button" onClick={() => dispatch(requestOTP(userName, email))} disabled={ConfirmOTP.confirmOTP === true}>Send OTP</button>
              <input type="text" onChange={(e) => setOTP(e.target.value)} disabled={ConfirmOTP.confirmOTP === true}/>
              <button type="button" onClick={() => dispatch(confirmOTP(otp))} disabled={ConfirmOTP.confirmOTP === true}>confirm</button>
            </li>
            <button type="button" disabled={ConfirmOTP.confirmOTP !== true}>Register</button>
          </ul>
        </form>
      </div>
    );
}