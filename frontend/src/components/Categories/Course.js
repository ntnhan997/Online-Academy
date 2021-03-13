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
import { commentCourseAction, detailsCourseAction } from "../../actions/detailsCourseAction";


export default function Course(props) {
  const CourseId = props.match.params.id;
  const list = useSelector(state => state.detailsList);
  const comment = useSelector(state => state.commentList);
  const {comments} = comment;
  const {details} = list;
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsCourseAction(CourseId));
    dispatch(commentCourseAction(CourseId));
  }, [dispatch])

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
            <div className="course-header-right">
              <span>${details.CoursePrice}</span>
              <button>BUY THIS COURSE</button>
            </div>
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
              <div class="box-tab">
                <h3>COURSE DESCRIPTION</h3>
                <p>
                  {details.CourseDescriptions}
                </p>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className={"box-tab"}>
                {data.map((item) => {
                  return <AccordionCourse data={item} />;
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

          <CourseSuggestion />
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}
