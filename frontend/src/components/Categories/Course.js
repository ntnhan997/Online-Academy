import React, { useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import Rating from '@material-ui/lab/Rating';


export default function Course(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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

      <div>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            variant="fullWidth"
          >
            <Tab label="Item One"  />
            <Tab label="Item Two"  />
            <Tab label="Item Three"  />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div>
    </div>
  );
}
