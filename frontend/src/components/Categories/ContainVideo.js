import React, { useEffect } from "react";
import ReactPlayer from 'react-player/lazy';
import { useDispatch, useSelector } from "react-redux";
import {useParams } from "react-router-dom";
import { lectureAction, lectureActionNoUser } from "../../actions/courseAction";
import AccordionCourse from "./AccordionCourse";

export default function ContainVideo(){

    const { CourseID, LectureID } = useParams();
    const lectureList = useSelector(state => state.lectureCourse);
    const {lectures} = lectureList;

    const check = useSelector(state => state.getBuyCourse);
  const {getBuy} = check;
  const user = useSelector((state) => state.loginUser);
  const { users } = user;
    const dispatch = useDispatch();
      useEffect(() => {
        if(users !== null && getBuy.bought === true){ 
          dispatch(lectureAction(CourseID)) 
        }
        if(users !== null && getBuy.bought === false){ 
          dispatch(lectureActionNoUser(CourseID));
        }
        if((users === null))
        {
          dispatch(lectureActionNoUser(CourseID));
        }
        return () =>{
        }
    }, [dispatch,CourseID, getBuy.bought, users]);
    return (
        
      <div className="containvideo">
        <div className="box-video">
          <ReactPlayer url={lectures.find(item => Number(item.LectureID) === Number(LectureID)).LectureContent} controls />
        </div>
        <div className="box-course">
          {lectures.map((item) => {
            return <AccordionCourse data={item} />;
          })}
        </div>
      </div>
    );
}