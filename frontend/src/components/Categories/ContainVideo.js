import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player/lazy';
import { useDispatch, useSelector } from "react-redux";
import {useParams } from "react-router-dom";
import { lectureAction } from "../../actions/courseAction";
import { WishList } from "../../actions/wishListAction";
import AccordionCourse from "./AccordionCourse";

export default function ContainVideo(){

    const { CourseID, LectureID } = useParams();
    const lectureList = useSelector(state => state.lectureCourse);
    const {lectures} = lectureList;
    const dispatch = useDispatch();
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
      },
      {
        id: 2,
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
      },
      {
        id: 3,
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
      useEffect(() => {
        dispatch(lectureAction(CourseID));
        return () =>{
        }
    }, [dispatch,CourseID]);

    //   const [dataVideo] = useState([
    //     {
    //         idLesson: 0,
    //         src : "https://www.youtube.com/watch?v=qQuxYw7u4tQ",
    //         status: true
    //     },
    //     {
    //         idLesson: 1,
    //         src: "https://www.youtube.com/watch?v=96KHRlisbcY",
    //         status: true
    //     },
    //     {
    //         idLesson: 2,
    //         src : "https://www.youtube.com/watch?v=sA7V0md_Xes",
    //         status: false
    //     },
    //     {
    //         idLesson: 3,
    //         src : "http://media.w3.org/2010/05/video/movie_300.webm",
    //         status: false
    //     },
    //     {
    //         idLesson: 4,
    //         src : "http://media.w3.org/2010/05/video/movie_300.webm",
    //         status: false
    //     }
    // ])
    // console.log(;
    return (
        
      <div className="containvideo">
        <div className="box-video">
          <ReactPlayer url={lectures.find(item => item.LectureID == LectureID).LectureContent} controls />
        </div>
        <div className="box-course">
          {lectures.map((item) => {
            return <AccordionCourse data={item} />;
          })}
        </div>
      </div>
    );
}