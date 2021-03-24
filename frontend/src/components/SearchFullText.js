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
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 6;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentTodos =[...searchs.slice(indexOfFirstNews, indexOfLastNews)];
    const page =[];
    for(let index = 0; index < Math.ceil(searchs.length / newsPerPage); index++){
        page.push(index);
    }


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
                currentTodos.map((item, index) => {
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
                      CourseStatus = {item.CourseStatus}
                    />
                  </PopularWrapper>
                  </div>)
                })
        }
        </div>
        <div className= "pagination">
                    {
                        page.map((x,index) => {
                            return <button className="numPage" disabled={x === currentPage - 1} key={index} onClick={(e) => setCurrentPage(e.target.textContent)}>{x + 1}</button>
                        })
                    }
                </div>
        </>
    )
} 