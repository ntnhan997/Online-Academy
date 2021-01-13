import React from "react";
import { PopularWrapper } from "./PopularStyle";
import Card from ".././Card";

export default function PopularCourses() {
  return (
    <PopularWrapper>
      <div className="wrapper">
        <h1>Popular Courses</h1>
        <div className="cards_wrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </PopularWrapper>
  );
}
