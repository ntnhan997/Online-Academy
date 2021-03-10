import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./style.css";
import { PopularWrapper } from "./PopularStyle";
import Card from "../Card";

import { useDispatch, useSelector } from "react-redux";
import { TopCourseViews } from "../../actions/courseAction.js";

const MostViewedCourses = () => {
  const List = useSelector((state) => state.listView);
  const { listViews } = List;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TopCourseViews());
    return () => {};
  }, [dispatch]);

  return (
    <div className="ListLatestCourse">
      <h3>Most Viewed Courses</h3>
      {listViews[0] ? (
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
          {listViews.map((item, index) => {
            return (
              <PopularWrapper key={index}>
                <Card
                  key={item.courseId}
                  className="cardCourse"
                  id={item.CourseId}
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
            );
          })}
        </OwlCarousel>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default MostViewedCourses;
