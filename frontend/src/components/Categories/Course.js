import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import InboxIcon from "@material-ui/icons/Inbox";
import Icon from "@material-ui/core/Icon";
import PersonIcon from "@material-ui/icons/Person";
import CommentIcon from "@material-ui/icons/Comment";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import CourseSuggestion from "../HomePage/CourseSuggestion";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import FormControl from "@material-ui/core/FormControl";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { makeStyles } from "@material-ui/core/styles";

import AccordionCourse from "./AccordionCourse";
import { useDispatch, useSelector } from "react-redux";
import {
  commentCourseAction,
  detailsCourseAction,
  postCommentAction,
} from "../../actions/detailsCourseAction";
import {
  getBuyCourseAction,
  getRatingUserAction,
  ratingAction,
  BuyCourseAction,
  lectureAction,
  lectureActionNoUser,
  AddLectureByTeacherAction,
} from "../../actions/courseAction";
import {
  addWishListAction,
  checkWishListAction,
} from "../../actions/wishListAction";
import parseJwt from "../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
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
}));

export default function Course(props) {
  const classes = useStyles();
  const CourseId = props.match.params.id;
  const list = useSelector((state) => state.detailsList);
  const comment = useSelector((state) => state.commentList);
  const { comments } = comment;
  const { details } = list;
  const [value, setValue] = useState(0);

  const ratingOfUser = useSelector((state) => state.rating);
  const { ratingUser } = ratingOfUser;

  const check = useSelector((state) => state.getBuyCourse);
  const { getBuy } = check;

  const lectureList = useSelector((state) => state.lectureCourse);
  const { lectures } = lectureList;
  // const [rating,setRating] = useState(0);

  const user = useSelector((state) => state.loginUser);
  const { users } = user;

  const wishlist = useSelector((state) => state.checkWL);
  const { hasWishList } = wishlist;

  const [postcomment, setComment] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // if(ratingUser !== null){
  //     setRating(Number(ratingUser.Score));
  //   }
  const dispatch = useDispatch();

  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), LectureName: "", LectureContent: "", LecturePreview: true },
  ]);

  const handleSubmit = (e, CourseId, lecture) => {
    e.preventDefault();
    dispatch(AddLectureByTeacherAction(CourseId, lecture));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Add Category Success",
      showConfirmButton: true,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        props.history.push("/");
      }
    });
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        LectureName: "",
        LectureContent: "",
        LecturePreview: true,
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  useEffect(() => {
    dispatch(detailsCourseAction(CourseId));
    dispatch(commentCourseAction(CourseId));
    dispatch(getRatingUserAction(CourseId));
    dispatch(getBuyCourseAction(CourseId));
    dispatch(checkWishListAction(CourseId));
    if (users !== null && getBuy.bought === true) {
      dispatch(lectureAction(CourseId));
    }
    if (users !== null && getBuy.bought === false) {
      dispatch(lectureActionNoUser(CourseId));
    }
    if (users === null) {
      dispatch(lectureActionNoUser(CourseId));
    }

    // if(ratingUser !== null){
    //   setRating(Number(ratingUser.Score));
    // }
  }, [dispatch, CourseId, getBuy.bought, users]);

  const handleComment = (CourseId, postcomment) => {
    dispatch(postCommentAction(CourseId, postcomment));
    setComment("");
  };

  const handleRating = (CourseID, Score) => {
    dispatch(ratingAction(CourseID, Score));
  };

  const handleBuy = (CourseID) => {
    dispatch(BuyCourseAction(CourseID));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Buy Course Success",
      showConfirmButton: true,
    });
  };

  const handleAddWL = (CourseID) => {
    dispatch(addWishListAction(CourseID));
    dispatch(checkWishListAction(CourseID));
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <>
      {details ? (
        <div className="course">
          <h3>{details.CourseName}</h3>
          <div className="course-header">
            <div className="course-header-left">
              <img
                src={
                  details.Avatar ||
                  "https://www.w3schools.com/howto/img_avatar.png"
                }
                alt=""
              />
              <div className="course-header-left-box">
                <p>Teacher</p>
                <span>{details.FullName}</span>
              </div>
              <div className="course-header-left-box">
                <p>Categories</p>
                <span>{details.CategoryName}</span>
              </div>
              <div className="course-header-left-box">
                <p>Review</p>
                <span>
                  <Rating
                    name="half-rating"
                    value={Number(details.CourseRatings)}
                    precision={0.1}
                    readOnly
                  />{" "}
                  ({details.CourseReviews} REVIEW)
                </span>
              </div>
              {users != null &&
                hasWishList.hasWishList === false &&
                (users !== null
                  ? parseJwt(users.accessToken).Role !== 2
                  : "") && (
                  <button
                    className="Add-wishList"
                    type="button"
                    onClick={() => handleAddWL(CourseId)}
                  >
                    +Add WishList
                  </button>
                )}
            </div>
            {getBuy.bought === false &&
              (users !== null
                ? parseJwt(users.accessToken).Role !== 2
                : "") && (
                <div className="course-header-right">
                  <span>${details.CoursePrice}</span>
                  <button type="button" onClick={() => handleBuy(CourseId)}>
                    BUY THIS COURSE
                  </button>
                </div>
              )}
          </div>
          <img src={details.CourseImage} alt="" />

          <div className="tabs">
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
              >
                <Tab label="Overview" icon={<BookmarkIcon />} />
                <Tab label="Curriculum" icon={<InboxIcon />} />
                <Tab label="Instructor" icon={<PersonIcon />} />
                <Tab label="Reviews" icon={<CommentIcon />} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <span className="box-tab">
                <span>{details.CourseDescriptions}</span>
              </span>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="box-tab">
                {lectures.map((item, index) => {
                  return <AccordionCourse data={item} key={index} />;
                })}
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="box-tab">avatar...</div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div className="box-tab">
                Review
                {comments.map((item, index) => {
                  return (
                    <div className="comment" key={index}>
                      <p className="name-comment">
                        {item.FullName + " --- " + item.DateOfComment}
                      </p>
                      <span>{item.Comment}</span>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          </div>
          {users !== null && (
            <>
              {parseJwt(users.accessToken).Role !== 2 && (
                <div>
                  Rating:
                  <Rating
                    name="half-rating"
                    value={ratingUser !== null ? Number(ratingUser.Score) : 0}
                    precision={0.5}
                    // onChange={(e) => setRating(e.target.value)}
                    onChange={(e) => handleRating(CourseId, e.target.value)}
                  />
                </div>
              )}
              <div className="post-comment">
                Post Comment
                <br />
                <textarea
                  rows="9"
                  cols="100"
                  value={postcomment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <button
                  type="button"
                  className="btn-comment"
                  onClick={() => handleComment(CourseId, postcomment)}
                >
                  Send
                </button>
              </div>
            </>
          )}
          {users !== null &&
            parseJwt(users.accessToken).Role === 2 &&
            inputFields.map((inputField) => (
              <FormControl component="fieldset">
                <div key={inputField.id}>
                  <TextField
                    name="LectureName"
                    label="Lecture Name"
                    variant="filled"
                    value={inputField.LectureName}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                  {"    "}
                  <TextField
                    name="LectureContent"
                    label="Lecture URL"
                    variant="filled"
                    value={inputField.LectureContent}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">
                      Lecture Preview
                    </InputLabel>
                    <Select
                      name="LecturePreview"
                      labelId="Lecture Preview"
                      value={inputField.lecturePreview}
                      onChange={(event) =>
                        handleChangeInput(inputField.id, event)
                      }
                    >
                      <MenuItem value="true">Public</MenuItem>
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
              </FormControl>
            ))}
          <br />
          {users !== null && parseJwt(users.accessToken).Role === 2 && (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
              endIcon={<Icon>send</Icon>}
              onClick={(e) => handleSubmit(e, CourseId, inputFields)}
            >
              Add Category
            </Button>
          )}

          {users !== null && parseJwt(users.accessToken).Role !== 2 && (
            <CourseSuggestion CategoryID={details.CategoryID} />
          )}
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}
