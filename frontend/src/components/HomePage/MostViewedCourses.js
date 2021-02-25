import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./style.css";
import { PopularWrapper } from "./PopularStyle";
import Card from '../Card';


import { useDispatch, useSelector } from "react-redux";
import { TopCourseViews } from "../../actions/courseAction.js";

const MostViewedCourses = () => {

  const List = useSelector(state => state.listView);
  const {listViews} = List;
  const dispatch = useDispatch();
  if(listViews[0]){
    console.log(listViews[0].CategoryName);
  }else{
    console.log("k co");
  }

  useEffect(() => {
    dispatch(TopCourseViews());
    return () =>{
    }
},[dispatch]);

  const [dataCard] = useState([
    {
      courseId: 0,
      title: "Lập Trình React",
      category: "Lập Trình",
      nameTeacher: "Nguyễn Trung Nhân",
      price: "500",
      ratingAverage: 1.5,
      totalReviews: 40,
      bgPhoto: "https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg",
    },
    {
      courseId: 1,
      title: "Lập Trình React",
      category: "Lập Trình",
      nameTeacher: "Nguyễn Trung Nhân",
      price: "5700",
      ratingAverage: 1.5,
      totalReviews: 40,
      bgPhoto: "https://image2.baonghean.vn/w607/Uploaded/2020/reeaekxlxk/2018_01_04/34617298_412018.jpg",
    },
    {
      courseId: 2,
      title: "Lập Trình React",
      category: "Lập Trình",
      nameTeacher: "Nguyễn Trung Nhân",
      price: "300",
      ratingAverage: 1.5,
      totalReviews: 40,
      bgPhoto: "https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg",
    },
    {
      courseId: 3,
      title: "Lập Trình React",
      category: "Lập Trình",
      nameTeacher: "Nguyễn Trung Nhân",
      price: "500",
      ratingAverage: 1.5,
      totalReviews: 40,
      bgPhoto: "https://scr.vn/wp-content/uploads/2020/08/H%C3%8CNH-%E1%BA%A2NH-M%E1%BA%A0NG-%C4%90%E1%BA%B8P-1210x630.jpg",
    },
    {
      courseId: 4,
      title: "Lập Trình React",
      category: "Lập Trình",
      nameTeacher: "Nguyễn Trung Nhân",
      price: "500",
      ratingAverage: 1.5,
      totalReviews: 40,
      bgPhoto: "https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg",
    },
    {
      courseId: 5,
      title: "Lập Trình React",
      category: "Lập Trình",
      nameTeacher: "Nguyễn Trung Nhân",
      price: "500",
      ratingAverage: 1.5,
      totalReviews: 40,
      bgPhoto: "https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg",
    },
    {
      courseId: 6,
      title: "Lập Trình React",
      category: "Lập Trình",
      nameTeacher: "Nguyễn Trung Nhân",
      price: "500",
      ratingAverage: 1.5,
      totalReviews: 40,
      bgPhoto: "https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg",
    },
    {
      courseId: 7,
      title: "Lập Trình React",
      category: "Lập Trình",
      nameTeacher: "Nguyễn Trung Nhân",
      price: "500",
      ratingAverage: 5,
      totalReviews: 50,
      bgPhoto: "https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg",
    }
  ]);
  return (
    <div className="ListLatestCourse">
      <h3>Most Viewed Courses</h3>
      {
        listViews[0] ? 
        <OwlCarousel className="owl-theme" loop margin={10} lazyLoad items={4} dots={false} nav navText={['<-Prev','Next->']}>
        {
          listViews.map(item => {
            return <PopularWrapper><Card key = {item.courseId} className="cardCourse"
                id = {item.CourseId}
                title = {item.CourseName}
                category = {item.CategoryName}
                price = {item.CoursePrice}
                bgPhoto = {item.CourseImage}
                totalReviews={item.CourseReviews}
                ratingAverage = {item.CourseRatings}
                descriptions = {item.CourseDescriptions}
                TeacherName = {item.TeacherName}
                Avatar = {item.Avatar}
            /></PopularWrapper>
          })
        }
      </OwlCarousel>
      : "Loading..."

      }
    </div>
  );
};

export default MostViewedCourses;
