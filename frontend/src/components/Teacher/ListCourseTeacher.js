import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopularWrapper } from "../HomePage/PopularStyle";
import Card from "../Card";
import { ListCourseTeacherAction } from "../../actions/courseAction";

export default function ListCourseTeacher() {
 
    const list = useSelector(state => state.courseListTeachers);
    const {courseListTeacher} = list;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ListCourseTeacherAction());
    },[dispatch]);
  return (
    <div className="enrolled">
        {
             courseListTeacher ? 
             courseListTeacher.map((item, index) => {
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
                         TeacherName={item.FullName}
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



