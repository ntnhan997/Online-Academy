import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {requestOTP, confirmOTP, RegisterUserAction} from '../actions/userAction';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

export default function RegisterUser() {
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [otp,setOTP] = useState("");

  const list = useSelector(state => state.confirmOTP);
  const {ConfirmOTP} = list;

  const handleRegister = (userName,password,fullName,email) => {
    dispatch(RegisterUserAction({userName,password,fullName,email}));
  }

  const dispatch = useDispatch();
    return (
      <div className="register">
        <form action="">
          <ul>
            <li>
            <TextField
              name="UserName"
              label="User Name"
              variant="filled"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            </li>
            <br/>
            <li>
            <TextField
              name="Password"
              label="Password"
              variant="filled"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            </li>
            <br/>
            <li>
            <TextField
              name="FullName"
              label="Full Name"
              variant="filled"
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
            </li>
            <br/>
            <li>
            <TextField
              name="Email"
              label="Email"
              variant="filled"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            </li>
            <br/>
            <li>
            <Button
            variant="contained"
            color="primary"
            type="button"
            disabled={ConfirmOTP.confirmOTP === true}
            endIcon={<Icon>send</Icon>}
            onClick={(e) => dispatch(requestOTP(userName, email))}
          >
            Send OTP
          </Button>
              {/* //<button type="button" onClick={() => dispatch(requestOTP(userName, email))} disabled={ConfirmOTP.confirmOTP === true}>Send OTP</button> */}
              <TextField
              name="OTP"
              label="OTP"
              variant="filled"
              type="text"
              value={otp}
              disabled={ConfirmOTP.confirmOTP === true}
              onChange={(event) => setOTP(event.target.value)}
            />
          <span className={ConfirmOTP.confirmOTP === false ? "show" : "hidden"}>Wrong OTP</span>

              {/* //<input type="text" onChange={(e) => setOTP(e.target.value)} disabled={ConfirmOTP.confirmOTP === true}/> */}

              <Button
            variant="contained"
            color="primary"
            type="button"
            disabled={ConfirmOTP.confirmOTP === true}
            endIcon={<Icon>send</Icon>}
            onClick={(e) => dispatch(confirmOTP(otp))}
          >
            confirm
          </Button>
            </li>
            <br />
            {/* <Button
            variant="contained"
            color="primary"
            type="button"
            className="btnRegister"
            disabled={ConfirmOTP.confirmOTP !== true}
            endIcon={<Icon>send</Icon>}
            onClick={(e) => handleRegister(userName,password,fullName,email)}
          >
            Register
          </Button> */}

          <button type="button" className={ConfirmOTP.confirmOTP !== true  ? "btnRegister--none": "btn solid"} onClick={(e) => handleRegister(userName,password,fullName,email)}>Register</button>
          </ul>
        </form>
      </div>
    );
}