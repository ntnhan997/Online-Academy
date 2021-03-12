import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { SearchAction } from '../actions/searchAction';
import { PopularWrapper } from "./HomePage/PopularStyle";
import Card from "./Card";

export default function SearchFullText (){
    const location = useLocation();
    const list = useSelector(state=> state.searchList);
    const {searchs} = list;
    const dispatch = useDispatch();
    console.log(location.search);
    useEffect(()=> {
        dispatch(SearchAction(location.search));
    }, [dispatch, location])
    return (
        <div className="search-fulltext">
            {
                searchs.map((item, index) => {
                  return( <div className="card-search">
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
                      descriptions={item.CourseDescriptions}
                      TeacherName={item.TeacherName}
                      Avatar={item.Avatar}
                      CategoryName = {item.CategoryName}
                    />
                  </PopularWrapper>
                  </div>)
                })
        }
        </div>
    )
} 