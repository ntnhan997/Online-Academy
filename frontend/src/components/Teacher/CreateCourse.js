import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import { makeStyles } from '@material-ui/core/styles';
import { CreateCourseByTeacherAction, GetNameCategoryAction } from '../../actions/courseAction';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))
export default function CreateCourse(props) {
  
  const classes = useStyles();
  const dispatch = useDispatch();

  const list = useSelector(state => state.getCategoryName);
  const {getCategory} = list;

  const [courseStatus, setCourseStatus] = useState(true);
    const [courseName, setCourseName] = useState("");
    const [courseImage, setCourseImage] = useState("");
    const [courseSummary, setCourseSummary] = useState("");
    const [coursePrice, setCoursePrice] = useState("");
    const [courseDescriptions, setCourseDescriptions] = useState("");
    const [categoryName, setCategoryName] = useState("");

    const [inputFields, setInputFields] = useState([
      { id: uuidv4(), LectureName: '', LectureContent: '', LecturePreview: true },
    ]);
  
    const handleSubmit = (e,course, lecture) => {
      e.preventDefault();
      dispatch(CreateCourseByTeacherAction(course,lecture));
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
  
    const handleChangeInput = (id, event) => {
      const newInputFields = inputFields.map(i => {
        if(id === i.id) {
          i[event.target.name] = event.target.value
        }
        return i;
      })
      
      setInputFields(newInputFields);
    }
  
    const handleAddFields = () => {
      setInputFields([...inputFields, { id: uuidv4(),  LectureName: '', LectureContent: '', LecturePreview: true }])
    }
  
    const handleRemoveFields = id => {
      const values  = [...inputFields];
      values.splice(values.findIndex(value => value.id === id), 1);
      setInputFields(values);
    }

    useEffect(() => {
     dispatch(GetNameCategoryAction()); 
    },[dispatch])

  return (
    <Container className="createcourse">
      <h1>Add New Course</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          name="CourseName"
          label="Course Name"
          variant="filled"
          value={courseName}
          onChange={(event) => setCourseName(event.target.value)}
        />

        <TextField
          name="CourseImage"
          label="Course Image"
          variant="filled"
          value={courseImage}
          onChange={(event) => setCourseImage(event.target.value)}
        />

        <TextField
          name="CourseSummary"
          label="Course Summary"
          variant="filled"
          value={courseSummary}
          onChange={(event) => setCourseSummary(event.target.value)}
        />

        <TextField
          multiline
          rowsMax={4}
          name="CourseDescriptions"
          label="Course Descriptions"
          variant="filled"
          value={courseDescriptions}
          onChange={(event) => setCourseDescriptions(event.target.value)}
        />



<TextField
          multiline
          rowsMax={4}
          name="coursePrice"
          label="Course Price"
          variant="filled"
          value={coursePrice}
          onChange={(event) => setCoursePrice(event.target.value)}
        />


<FormControl component="fieldset">
      <FormLabel component="legend">Status</FormLabel>
      <RadioGroup aria-label="Status" name="Status" value={courseStatus} onChange={(e) => setCourseStatus(e.target.value)}>
        <FormControlLabel value="true" control={<Radio />} label="complete" />
        <FormControlLabel value="false" control={<Radio />} label="incomplete" />
      </RadioGroup>
      
    </FormControl>
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Category Name</InputLabel>
        <Select
         name="LecturePreview"
          labelId="Lecture Preview"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
        >
          {getCategory.map((item) => 
              <MenuItem value={item.CategoryID} >{item.CategoryName}</MenuItem>
            )}
        </Select>
      </FormControl>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <TextField
              name="LectureName"
              label="Lecture Name"
              variant="filled"
              value={inputField.LectureName}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="LectureContent"
              label="Lecture URL"
              variant="filled"
              value={inputField.LectureContent}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Lecture Preview</InputLabel>
        <Select
         name="LecturePreview"
          labelId="Lecture Preview"
          value={inputField.lecturePreview}
          onChange={(event) => handleChangeInput(inputField.id, event)}
        >
          <MenuItem value="true" >Public</MenuItem>
          <MenuItem value="false">Private</MenuItem>
        </Select>
      </FormControl>
            <IconButton
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={handleAddFields}>
              <AddIcon />
            </IconButton>
          </div>
        ))}
        
      </form>
      <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<Icon>send</Icon>}
          onClick={(e) => handleSubmit(e,{courseName, courseImage, courseSummary, coursePrice, courseDescriptions, courseStatus, categoryName}, inputFields)}
        >
          Add
        </Button>
    </Container>
  );
}


