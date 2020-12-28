import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HomeWrapper } from "./HomePage/style";
const photos = [
  {
    name: "image 1",
    url:
      "https://images.pexels.com/photos/3768602/pexels-photo-3768602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "image 2",
    url:
      "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "image 3",
    url:
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?cs=srgb&dl=pexels-fauxels-3184325.jpg&fm=jpg",
  },
  {
    name: "image 4",
    url:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export default class Hero extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 100,
      autoplaySpeed: 4000,
      cssEase: "linear",
      className: "slides",
    };
    return (
      <HomeWrapper>
        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div>
                <img width="100%" src={photo.url} alt="" />
              </div>
            );
          })}
        </Slider>
      </HomeWrapper>
    );
  }
}

Hero.defaultProps = {
  hero: "defaultHero",
};
