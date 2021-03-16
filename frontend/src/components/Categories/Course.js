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
import {getBuyCourseAction, getRatingUserAction, ratingAction, BuyCourseAction } from "../../actions/courseAction";


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

  const [rating,setRating] = useState(0);


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
    if(ratingUser.Score){
      setRating(ratingUser.Score);
    }

    
  }, [dispatch,CourseId, ratingUser.Score])

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
  const [data] = useState([
    {
      id: 0,
      title: "Phần 1: Giới Thiệu",
      total: 2,
      time: "06:28",
      lesson: [{
        idLesson: 0,
        titleLesson: "1. Lời Khuyên trước khóa học",
        timeLesson: "04:20",
        status: true
      },
      {
        idLesson: 1,
        titleLesson: "2. Cài đặt môi trường",
        timeLesson: "02:20",
        status: false
      }
    ]
  },
  {
    id: 1,
    title: "Phần 2: Làm quen",
    total: 16,
    time: "01:52:50",
    lesson: [{
      idLesson: 2,
      titleLesson: "3. Cách sử dụng JS trong HTML",
      timeLesson: "04:20",
      status: false
    },
    {
      idLesson: 3,
      titleLesson: "4. Cài đặt môi trường",
      timeLesson: "02:20",
      status: false
    },
    {
      idLesson: 4,
      titleLesson: "5. Cài đặt môi trường",
      timeLesson: "02:20",
      status: false
    }
  ]
  }
  ])
  
  


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
                <span>COURSE DESCRIPTION</span>
                <span>
                  {details.CourseDescriptions}
                </span>
              </span>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="box-tab">
                {data.map((item,index) => {
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
          <CourseSuggestion />
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}
