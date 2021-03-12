import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./style.css";
import Card from "../Card";
import { PopularWrapper } from "./PopularStyle";

const CourseSuggestion = () => {

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
    <div className="CourseSuggestion">
      <h3>YOU MAY LIKE</h3>
      <OwlCarousel className="owl-theme" loop margin={10} lazyLoad items={4} dots={false} nav navText={['<-Prev','Next->']}>
        {
          dataCard.map(item => {
            return <PopularWrapper><Card key = {item.CourseID} className="cardCourse"
                id = {item.CourseID}
                title = {item.title}
                category = {item.category}
                price = {item.price}
                bgPhoto = {item.bgPhoto}
                totalReviews={item.totalReviews}
                ratingAverage = {item.ratingAverage}
            /></PopularWrapper>
          })
        }
      </OwlCarousel>
    </div>
  );
};

export default CourseSuggestion;
