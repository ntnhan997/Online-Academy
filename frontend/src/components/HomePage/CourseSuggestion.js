import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./style.css";
import Card from "../Card";
import { PopularWrapper } from "./PopularStyle";
import { useDispatch, useSelector } from "react-redux";
import { CourseSuggestionAction } from "../../actions/courseAction";

const CourseSuggestion = (props) => {

  const list = useSelector(state => state.courseSuggestions);
  const {courseSuggestionLists} = list;
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(CourseSuggestionAction(props.CategoryID))
  }, [dispatch, props.CategoryID])

  return (
    <div className="CourseSuggestion">
      <h3>YOU MAY LIKE</h3>
      {courseSuggestionLists[0] ? (
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          lazyLoad
          items={4}
          dots={false}
          nav
          navText={["<-Prev", "Next->"]}
        >
          {courseSuggestionLists.map((item, index) => {
            return (
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
                  TeacherName={item.FullName}
                  Avatar={item.Avatar}
                  CategoryName= {item.CategoryName}
                />
              </PopularWrapper>
            );
          })}
        </OwlCarousel>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default CourseSuggestion;
