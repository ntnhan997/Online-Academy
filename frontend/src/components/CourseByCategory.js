import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopularWrapper } from "./HomePage/PopularStyle";
import Card from "./Card";
import { CourseByCategoryAction } from "../actions/categoryAction";

export default function CourseByCategory(props) {
    const CategoryID = props.match.params.CategoryID;
    const list = useSelector(state => state.courseByCategorys);
    const {courseByCategory} = list;
    const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentTodos = [...courseByCategory.slice(indexOfFirstNews, indexOfLastNews)];
  const page = [];
  for (
    let index = 0;
    index < Math.ceil(courseByCategory.length / newsPerPage);
    index++
  ) {
    page.push(index);
  }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CourseByCategoryAction(CategoryID));
    },[dispatch, CategoryID]);
  return (
    <div className="enrolled">
        {
             courseByCategory ? 
             currentTodos.map((item, index) => {
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
        <div className="pagination">
        {page.map((x, index) => {
          return (
            <button
              className="numPage"
              disabled={x === currentPage - 1}
              key={index}
              onClick={(e) => setCurrentPage(e.target.textContent)}
            >
              {x + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
