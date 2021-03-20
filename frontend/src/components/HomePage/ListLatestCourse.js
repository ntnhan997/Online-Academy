import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./style.css";
import Card from "../Card";

import { PopularWrapper } from "./PopularStyle";
import { useDispatch, useSelector } from "react-redux";
import { TopCourseViews } from "../../actions/courseAction";

const ListLatestCourse = () => {
  const list = useSelector((state) => state.topCourseNewList);
  const { topCourseNewLists } = list;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TopCourseViews());
  }, [dispatch]);

  return (
    <div className="ListLatestCourse">
      <h1>New Courses</h1>
      {topCourseNewLists[0] ? (
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
          {topCourseNewLists.map((item, index) => {
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
                  TeacherName={item.TeacherName}
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

export default ListLatestCourse;
