import React, { useState } from 'react';
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

import { v4 as uuidv4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';


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
export default function CreateCourse() {
  
  const classes = useStyles();

  const [courseStatus, setCourseStatus] = useState(true);
    const [courseName, setCourseName] = useState("");
    const [courseImage, setCourseImage] = useState("");
    const [courseSummary, setCourseSummary] = useState("");
    const [coursePrice, setCoursePrice] = useState("");
    const [courseDescriptions, setCourseDescriptions] = useState("");

    const [inputFields, setInputFields] = useState([
      { id: uuidv4(), LectureName: '', LectureURL: '', LecturePreview: true },
    ]);
  
    const handleSubmit = (e,course, lecture) => {
      e.preventDefault();
      console.log("course", course);
      console.log("lecture", lecture);
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
      setInputFields([...inputFields, { id: uuidv4(),  LectureName: '', LectureURL: '', LecturePreview: true }])
    }
  
    const handleRemoveFields = id => {
      const values  = [...inputFields];
      values.splice(values.findIndex(value => value.id === id), 1);
      setInputFields(values);
    }

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
              name="LectureURL"
              label="Lecture URL"
              variant="filled"
              value={inputField.LectureURL}
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
          onClick={(e) => handleSubmit(e,{courseName, courseImage, courseSummary, coursePrice, courseDescriptions, courseStatus}, inputFields)}
        >
          Add
        </Button>
    </Container>
  );
}


