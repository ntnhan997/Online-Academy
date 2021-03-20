import React, { useEffect } from "react";
import { PopularWrapper } from "./PopularStyle";
import Card from ".././Card";
import { useDispatch, useSelector } from "react-redux";
import { HotCourseAction } from "../../actions/courseAction";

export default function PopularCourses() {

  const list = useSelector(state => state.hotCourseList);
  const {hotCourses} = list;

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(HotCourseAction());
  }, [dispatch])
  return (
    <PopularWrapper>
      <div className="wrapper">
        <h1>Popular Courses</h1>
        <div className="cards_wrap">
          {
            hotCourses[0] ? 
            hotCourses.map((item) => {
              return (
                <Card
                  key={item.CourseID}
                  className="cardCourse"
                  id={item.CourseID}
                  title={item.CourseName}
                  category={item.CategoryName}
                  price={item.CoursePrice}
                  bgPhoto={item.CourseImage}
                  totalReviews={item.CourseReviews}
                  ratingAverage={item.CourseRatings}
                  descriptions={item.CourseDescriptions}
                  TeacherName={item.TeacherName}
                  Avatar={item.Avatar}
                  CategoryName={item.CategoryName}
                />
              );
            })
            : "Loading..."
          }
          {/* <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
    </PopularWrapper>
  );
}
