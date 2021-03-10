import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogInAction } from "../actions/userAction";

export default function LogIn(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.loginUser);
  const { users } = user;
  console.log(users);

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
            <label htmlFor="">User Name:</label>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
          </li>
          <li>
            <label htmlFor="">Password:</label>
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
          </li>
          <button type="button" onClick={() => handleLogIn(userName, password)}>
            Log In
          </button>
        </ul>
      </form>
    </div>
  );
}
