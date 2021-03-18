import React, { useEffect, useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import InboxIcon from '@material-ui/icons/Inbox';
import PersonIcon from '@material-ui/icons/Person';
import CommentIcon from '@material-ui/icons/Comment';

import Rating from '@material-ui/lab/Rating';
import CourseSuggestion from "../HomePage/CourseSuggestion";

import AccordionCourse from "./AccordionCourse";
import { useDispatch, useSelector } from "react-redux";
import { commentCourseAction, detailsCourseAction, postCommentAction } from "../../actions/detailsCourseAction";
import {getBuyCourseAction, getRatingUserAction, ratingAction, BuyCourseAction, lectureAction, lectureActionNoUser } from "../../actions/courseAction";
import { addWishListAction, checkWishListAction } from "../../actions/wishListAction";


export default function Course(props) {
  const CourseId = props.match.params.id;
  const list = useSelector(state => state.detailsList);
  const comment = useSelector(state => state.commentList);
  const {comments} = comment;
  const {details} = list;
  const [value, setValue] = useState(0);


  const ratingOfUser = useSelector(state => state.rating);
  const {ratingUser} = ratingOfUser;


  const check = useSelector(state => state.getBuyCourse);
  const {getBuy} = check;

  const lectureList = useSelector(state => state.lectureCourse);
  const {lectures} = lectureList;
  const [rating,setRating] = useState(0);


  const user = useSelector((state) => state.loginUser);
  const { users } = user;

  const wishlist = useSelector(state => state.checkWL);
  const {hasWishList} = wishlist;

  const [postcomment, setComment] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsCourseAction(CourseId));
    dispatch(commentCourseAction(CourseId));
    dispatch(getRatingUserAction(CourseId));
    dispatch(getBuyCourseAction(CourseId));
    dispatch(checkWishListAction(CourseId));
    if(users !== null && getBuy.bought === true){ 
      dispatch(lectureAction(CourseId)) 
    }
    if(users !== null && getBuy.bought === false){ 
      dispatch(lectureActionNoUser(CourseId));
    }
    if((users === null))
    {
      dispatch(lectureActionNoUser(CourseId));
    }
    
    if(ratingUser.Score){
      setRating(ratingUser.Score);
    }

    
  }, [dispatch,CourseId, ratingUser.Score, getBuy.bought, users])

  const handleComment = (CourseId,postcomment) => {
    dispatch(postCommentAction(CourseId, postcomment));
    setComment("");
  }


  const handleRating = (CourseID, Scrore) => {
    dispatch(ratingAction(CourseID,Scrore));
  }

  const handleBuy = (CourseID) => {
    dispatch(BuyCourseAction(CourseID));
  }

  const handleAddWL = (CourseID) => {
    dispatch(addWishListAction(CourseID));
    dispatch(checkWishListAction(CourseID));
  }

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
                src={details.Avatar || "https://www.w3schools.com/howto/img_avatar.png" }
                alt=""
              />
              <div className="course-header-left-box">
                <p>Teacher</p>
                <span>{details.TeacherName}</span>
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
                    value={details.CourseRatings}
                    precision={0.1}
                    readOnly
                  />{" "}
                  ({details.CourseReviews} REVIEW)
                </span>
              </div>
              {(users != null && hasWishList.hasWishList === false) &&<button button type="button" onClick={() => handleAddWL(CourseId)}>+Add WishList</button>}
            </div>
            {
              getBuy.bought === false &&  
              <div className="course-header-right">
              <span>${details.CoursePrice}</span>
              <button type="button" onClick={() => handleBuy(CourseId)}>BUY THIS COURSE</button>
            </div>
            }
          </div>
          <img
            src={details.CourseImage}
            alt=""
          />

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
                <span>
                  {details.CourseDescriptions}
                </span>
              </span>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="box-tab">
                {lectures.map((item,index) => {
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
                {
                  comments.map((item, index) => {
                    return (
                      <div className="comment" key={index}>
                        <p className="name-comment">{item.FullName + " --- " + item.DateOfComment}</p>
                        <span>{item.Comment}</span>
                      </div>
                    )
                  })
                }
              </div>
            </TabPanel>
          </div>
          <div>
          Rating:
          <Rating
                    name="half-rating"
                    value={rating}
                    precision={0.5}
                    onChange={(e) => setRating(e.target.value)}
                    onClick={(e) => handleRating(CourseId,e.target.value)}
          />
          </div>
          <div className="post-comment">
            Post Comment
            <br/>
            <textarea rows="9" cols="100" value={postcomment} onChange={(e) => setComment(e.target.value)}>
            </textarea>
            <button type="button" className="btn-comment" onClick={() => handleComment(CourseId,postcomment)}>Send</button>
          </div>
          <CourseSuggestion CategoryID = {details.CategoryID}/>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}
