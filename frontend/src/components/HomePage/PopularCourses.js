import React from "react";
import { PopularWrapper } from "./PopularStyle";
import Card from ".././Card";

export default function PopularCourses() {
  return (
    <PopularWrapper>
      <h1>Popular Courses</h1>
      <div className="container">
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </PopularWrapper>
  );
}
