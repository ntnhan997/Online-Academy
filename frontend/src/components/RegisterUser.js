import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestOTP,
  confirmOTP,
  RegisterUserAction,
} from "../actions/userAction";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { SignUpWrapper } from "./HomePage/SignUpStyle";
import Swal from 'sweetalert2';
export default function RegisterUser(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");

  const list = useSelector((state) => state.confirmOTP);
  const { ConfirmOTP } = list;

  const handleRegister = (userName, password, fullName, email) => {
    dispatch(RegisterUserAction({ userName, password, fullName, email }));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Add Category Success',
      showConfirmButton: true,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          props.history.push("/");
      }
    }) 
  };

  const dispatch = useDispatch();
  return (
    <SignUpWrapper>
      <div className="body">
        <div className="wrapper">
          <div className="title-text">
            <div className="title signup">Sign Up</div>
            <div className="title login">Login form</div>
          </div>
          <div className="form-container">
            <div className="form-inner">
              {/*--------------------------- Signup ----------------------------*/}
              <form action="#" className="login">
                <div className="field">
                  <input
                    name="UserName"
                    type="text"
                    placeholder="username"
                    required
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                  />
                </div>
                <div className="field">
                  <input
                    name="Password"
                    type="password"
                    placeholder="password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className="field">
                  <input
                    name="FullName"
                    type="text"
                    placeholder="full name"
                    required
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                  />
                </div>
                <div className="field">
                  <input
                    name="Email"
                    type="text"
                    placeholder="name@email.com"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>

                <div className="field">
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
                </div>

                <div className="field">
                  <input
                    name="OTP"
                    type="text"
                    placeholder="enter your OTP code received"
                    required
                    value={otp}
                    disabled={ConfirmOTP.confirmOTP === true}
                    onChange={(event) => setOTP(event.target.value)}
                  />
                  <span
                    className={
                      ConfirmOTP.confirmOTP === false ? "show" : "hidden"
                    }
                  >
                    Wrong OTP
                  </span>
                </div>

                <div className="field">
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
                </div>
                {/* submit sign up */}

                <div className="field btn">
                  <div
                    className={
                      ConfirmOTP.confirmOTP === true ? "btn-layer" : ""
                    }
                  />
                  <button
                    type="button"
                    className={
                      ConfirmOTP.confirmOTP !== true
                        ? "btnRegister--none"
                        : "btn solid button"
                    }
                    onClick={(e) =>
                      handleRegister(userName, password, fullName, email)
                    }
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SignUpWrapper>
  );
}
