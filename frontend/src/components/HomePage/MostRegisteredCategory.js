import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./style.css";
import { PopularWrapper } from "./PopularStyle";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { TopCourseRegistered } from "../../actions/courseAction";

const MostRegisteredCategory = () => {
  const list = useSelector((state) => state.topCourseRegisterList);
  const { topCourseRegisterLists } = list;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TopCourseRegistered());
  }, [dispatch]);

  return (
    <div className="ListLatestCourse">
      <h1>Most Registered Category</h1>
      {topCourseRegisterLists[0] ? (
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
          {topCourseRegisterLists.map((item, index) => {
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
                  CategoryName = {item.CategoryName}
                  CourseStatus = {item.CourseStatus}
                />
              </PopularWrapper>
            );
          })}
        </OwlCarousel>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default MostRegisteredCategory;
