import React, { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
const Courses = ({ getCartItem }) => {
  const [courses, setCourses] = useState([]);
  const loadCourses = async () => {
    const res = await fetch("./api.json");
    const result = await res.json();
    setCourses(result);
  };
  //load course when component mount
  useEffect(() => {
    loadCourses();
  }, []);
  const handleAddToCart = (item) => {
    getCartItem(item);
  };
  //show all course
  const courseList = courses.map((course) => (
    <CourseItem
      key={course.id}
      course={course}
      onAddToCart={handleAddToCart.bind(null, course)}
    />
  ));
  return (
    <div className="row g-3 g-md-5 d-flex justify-content-center">
      {courseList}
    </div>
  );
};

export default Courses;
