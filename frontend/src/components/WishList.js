import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {removeFromWishList, WishList} from "../actions/wishListAction";
import { PopularWrapper } from "./HomePage/PopularStyle";
import Card from "./Card";

export default function WishListUser() {

    
    const list = useSelector(state => state.wishList);
    const {wishlists} = list;
    const dispatch = useDispatch();

    const handleDeleteWishList = (CourseID) => {
        dispatch(removeFromWishList(CourseID));
    }
    useEffect(() => {
        dispatch(WishList());
    }, [dispatch])
    return (
        <div className="wishlist">
           {
               wishlists ? 
               wishlists.map((item, index) => {
                   return <div className = "card-wishlist">
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
                   />
                 </PopularWrapper>
                 <button onClick={(e) => handleDeleteWishList(item.CourseID)} className="btn solid">X</button>
                 </div>
               }) 
               : "Loading..."
           }
        </div>
    )
}