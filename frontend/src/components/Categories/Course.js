import React, { useState } from "react";
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

import AccordionCourse from "../AccordionCourse";


export default function Course(props) {


  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    <div className="course">
      <h3>Become a PHP Master and Make Money Fast</h3>
      <div className="course-header">
        <div className="course-header-left">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div className="course-header-left-box">
            <p>Teacher</p>
            <span>KENY WHITE</span>
          </div>
          <div className="course-header-left-box">
            <p>Categories</p>
            <span>BACKEND</span>
          </div>
          <div className="course-header-left-box">
            <p>Review</p>
            <span><Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly/> (1 REVIEW)</span>
          </div>
        </div>
        <div className="course-header-right">
          <span>$500</span>
          <button>BUY THIS COURSE</button>
        </div>
      </div>
      <img
        src="https://educationwp.thimpress.com/demo-courses-hub/wp-content/uploads/sites/25/2015/06/course-2.jpg"
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
            <Tab label="Curriculum"  icon={<InboxIcon />}/>
            <Tab label="Instructor" icon={<PersonIcon />} />
            <Tab label="Reviews" icon={<CommentIcon />} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div class="box-tab">
            <h3>COURSE DESCRIPTION</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur beatae eum aspernatur consequuntur rem veniam laborum veritatis velit a officiis nam harum unde temporibus neque, autem voluptate dolorum qui. Pariatur?</p>
            <h3>COURSE DESCRIPTION</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur beatae eum aspernatur consequuntur rem veniam laborum veritatis velit a officiis nam harum unde temporibus neque, autem voluptate dolorum qui. Pariatur?</p>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className={"box-tab"}>
            {data.map(item => {
              return <AccordionCourse data={item}/>
            })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className="box-tab">
            avatar...
        </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <div className="box-tab">
            Review
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi facilis accusamus est! Ducimus nisi incidunt nobis molestiae, ea non voluptates? Delectus eveniet nobis laudantium, commodi inventore veritatis dignissimos officia.</p>
          </div>
        </TabPanel>
      </div>

      <CourseSuggestion />


    </div>
  );
}
