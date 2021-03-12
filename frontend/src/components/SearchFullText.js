import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { SearchAction } from '../actions/searchAction';
import { PopularWrapper } from "./HomePage/PopularStyle";
import Card from "./Card";

export default function SearchFullText (){
    const location = useLocation();
    const list = useSelector(state=> state.searchList);
    const {searchs} = list;
    const [price,setPrice] = useState(true);
    const [rating,setRating] = useState(true);
    const dispatch = useDispatch();
    let url = location.search;
    if(price === true){
        url = url +  "&price=asc";
    }else{
        url += "&price=desc";
    }
    if(rating === true){
        url += "&rating=asc";
    }else{
        url += "&rating=desc";
    }
    useEffect(()=> {
        dispatch(SearchAction(url));
    }, [dispatch, url])
    return (
        <>
        <div className="sort-search">
            <span onClick={() => setPrice(!price)}>Price: {price? "Increment" : "Decrement"}</span>
            <span onClick={() => setRating(!rating)}>Rating: {rating? "Increment" : "Decrement"}</span>
        </div>
        <div className="search-fulltext">
            {
                searchs.map((item, index) => {
                  return( <div className="card-search" key={index}>
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
        </>
    )
} 