import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogInAction } from "../actions/userAction";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

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
    <div className="login">
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
          <br />
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
          <br />
          <Button
            variant="contained"
            color="primary"
            type="button"
            endIcon={<Icon>send</Icon>}
            onClick={(e) => handleLogIn(userName, password)}
          >
            Log In
          </Button>
        </ul>
      </form>
    </div>
  );
}
