import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { AddCategoryAction } from "../../actions/adminAction";
import Swal from 'sweetalert2';

export default function CreateCategory(props) {
  
  const [CategoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();
  const check = useSelector(state => state.addCategorys);
  const {addCategory} = check;
  const handleAdd = (CategoryName) => {
    if(CategoryName !== "")
    {
      dispatch(AddCategoryAction(CategoryName));
      if(addCategory.complete === true){
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
      }
    }
    
  }
  return (
    <div className="createteacher">
      <ul>
        <li>
        <TextField
          name="CourseName"
          label="Course Name"
          variant="filled"
          value={CategoryName}
          onChange={(event) => setCategoryName(event.target.value)}
        />
        </li>
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<Icon>send</Icon>}
          onClick={(e) => handleAdd({CategoryName})}
        >
          Add Category
        </Button>
      </ul>
    </div>
  );
}
