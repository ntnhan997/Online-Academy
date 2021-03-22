import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateUserAction } from "../../actions/adminAction";

export default function CreateTeacher(props) {
  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleRegister = (user) => {
    if(userName !== "" && password !== "" && fullName !== "" && email !=="")
    {
      dispatch(CreateUserAction({
        UserName: user.userName,
        Password: user.password,
        FullName: user.fullName,
        Email: user.email
      }));
      props.history.push("/");
    }
    
  }
  return (
    <div className="createteacher">
      <ul>
        <li>
          <label htmlFor="UserName">User Name: </label>
          <input type="text" onChange={(e) => setUserName(e.target.value)}/>
        </li>
        <li>
          <label htmlFor="Password">Password: </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        </li>
        <li>
          <label htmlFor="FullName">Full Name: </label>
          <input type="text" onChange={(e) => setFullName(e.target.value)}/>
        </li>
        <li>
          <label htmlFor="Email">Email: </label>
          <input type="email" onChange={(e) => setEmail(e.target.value)}/>
        </li>
        <button type="button" onClick={() => handleRegister({userName, password, fullName, email})}>Register Teacher</button>
      </ul>
    </div>
  );
}
