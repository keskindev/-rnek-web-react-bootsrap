import React from "react";
import Courses from "../components/Courses";
import Slider from "../components/Slider";
import courseData from "../data/courseData";

const Home = () => {
  return (
    <div>
      <Slider />
      <h1 style={{ color: "purple" }} className="text-center display-5">
        Courses
      </h1>
      <Courses data={courseData} />
    </div>
  );
};

export default Home;
