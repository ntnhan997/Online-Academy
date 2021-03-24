import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateUserAction } from "../../actions/adminAction";

export default function CreateCategory(props) {
  
  const [CategoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();
  const handleAdd = (CategoryName) => {
    // if(CategoryName !== "")
    // {
    //   dispatch(CreateUserAction({
    //     UserName: user.userName,
    //     Password: user.password,
    //     FullName: user.fullName,
    //     Email: user.email
    //   }));
    //   props.history.push("/");
    // }
    
  }
  return (
    <div className="createteacher">
      <ul>
        <li>
          <label htmlFor="CategoryName">Category Name: </label>
          <input type="text" onChange={(e) => setCategoryName(e.target.value)}/>
        </li>
        <button type="button" onClick={() => handleAdd({CategoryName})}>Add Category</button>
      </ul>
    </div>
  );
}
