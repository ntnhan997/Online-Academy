import React from "react";
import Hero from "../components/Hero";
import ListLatestCourse from "../components/HomePage/ListLatestCourse";
import MostRegisteredCategory from "../components/HomePage/MostRegisteredCategory";
import MostViewedCourses from "../components/HomePage/MostViewedCourses";


export default function HomePage() {
  return (
    <>
      <Hero></Hero>
      <ListLatestCourse />
      <MostViewedCourses />
      <MostRegisteredCategory />
    </>
  );
}
