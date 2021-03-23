import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { GetUserByIdAction, UpdateUserAction } from "../actions/userAction";
import Swal from 'sweetalert2';

export default function UpdateUser(props) {
  const dispatch = useDispatch();
  const list = useSelector(state => state.getUserId);
    const {getUserById} = list;
    const check = useSelector(state => state.checkUpdateUser);
    const {checkUpdateUser} = check;
    console.log(checkUpdateUser)
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  useEffect(() => {
      dispatch(GetUserByIdAction());
      setFullName(getUserById.FullName);
      setEmail(getUserById.Email);
  }, [dispatch, getUserById.FullName, getUserById.Email])

  const handleUpdate = (user) => {
    dispatch(UpdateUserAction(user));
    if(checkUpdateUser.complete === true){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Account Updated',
            showConfirmButton: true,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                props.history.push("/");
            }
          })     
    }
    
  }
  return (
    <div className="updateaccount">
      <TextField
        name="FullName"
        label="Full Name"
        variant="filled"
        value={FullName}
        onChange={(event) => setFullName(event.target.value)}
      />
<br/>
      <TextField
        name="Email"
        label="Email"
        variant="filled"
        value={Email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br/>
      <TextField
        name="Password"
        label="Password"
        variant="filled"
        type="password"
        value={Password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br/>
      <Button
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<Icon>send</Icon>}
          onClick={(e) => handleUpdate({FullName, Password, Email})}
        >
          Update
        </Button>
    </div>
  );
}
