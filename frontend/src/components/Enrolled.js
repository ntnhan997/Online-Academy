import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EnrolledListAction } from "../actions/courseAction";
import { PopularWrapper } from "./HomePage/PopularStyle";
import Card from "./Card";

export default function Enrolled() {
 
    const list = useSelector(state => state.enrolledLists);
    const {enrolledList} = list;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(EnrolledListAction());
    },[dispatch]);
  return (
    <div className="enrolled">
        {
             enrolledList ? 
             enrolledList.map((item, index) => {
                 return (
                   <div className="card-enrolled">
                     <PopularWrapper key={index}>
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
                         descriptions={item.CourseSummary}
                         TeacherName={item.TeacherName}
                         Avatar={item.Avatar}
                         CategoryName={item.CategoryName}
                         CourseStatus = {item.CourseStatus}
                       />
                     </PopularWrapper>
                   </div>
                 );
             }) 
             : "Loading..."
        }
    </div>
  );
}
