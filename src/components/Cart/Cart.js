import React from "react";
import "./Cart.css";
import { FaTimes } from "react-icons/fa";

const Cart = ({ cart }) => {
  //show user selected courses
  const addedCourseList = cart.map((course) => {
    const { course_name, image } = course;
    return (
      <li className="courseList" key={Math.random()}>
        <img src={image} alt="course" className="img-thumbnail" />
        <h5>{course_name}</h5>
        <FaTimes />
      </li>
    );
  });
  //calculate total cost
  const totalCost = cart.reduce((acc, course) => acc + course.price, 0);
  return (
    <div className="cart mt-4 mt-xxl-0">
      <h3>Order Summary</h3>
      <p className="mt-4 mb-3">
        Courses Added : <span>{cart.length}</span>
      </p>
      <p>
        Total Cost : <strong>${totalCost.toFixed(2)}</strong>
      </p>
      <ul>{addedCourseList}</ul>
      <button className="w-100 btn btn-primary mt-3">Order Now</button>
    </div>
  );
};

export default Cart;
