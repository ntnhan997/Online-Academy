import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogInAction } from "../actions/userAction";
import { LoginWrapper } from "./HomePage/LoginStyle";

export default function LogIn(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.loginUser);
  const { users } = user;

  const dispatch = useDispatch();
  const handleLogIn = (userName, password) => {
    dispatch(LogInAction({ userName, password }));
  };

  useEffect(() => {
    if (users != null) {
      props.history.push("/");
    }
  });

  return (
    <LoginWrapper>
      <div className="body">
        <div className="wrapper">
          <div className="title-text">
            <div className="title login">Login</div>
            <div className="title signup">Signup Form</div>
          </div>
          <div className="form-container">
            <div className="form-inner">
              {/*--------------------------- login ----------------------------*/}
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
                {/* submit login */}
                <div className="field btn">
                  <div className="btn-layer" />
                  <button
                    className="button"
                    type="button"
                    onClick={(e) => handleLogIn(userName, password)}
                  >
                    Login
                  </button>
                </div>
                <div className="signup-link">
                  Not a member? <a href>Signup now</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
}
