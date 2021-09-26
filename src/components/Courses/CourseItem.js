import React from "react";
import "./CourseItem.css";
import Rating from "react-rating";
import {
  FaUserAlt,
  FaClock,
  FaList,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

const CourseItem = (props) => {
  const {
    course_name,
    image,
    category,
    course_creator,
    duration,
    price,
    rating,
  } = props.course;
  return (
    <div className="col-xl-4 col-sm-6 ">
      <div className="wrapper">
        <div className="overviewInfo">
          <div className="productInfo">
            <div className="productImage">
              <img src={image} alt="product: ps5 controller" />
            </div>
          </div>
        </div>
        <div className="productSpecifications">
          <h2> {course_name} </h2>
          <div className="productFeatures">
            <div className="feature">
              <div className="featureIcon">
                <FaUserAlt />
              </div>
              <div className="featureText">
                <p>
                  <strong>Course Creator</strong>
                </p>
                <p>{course_creator}</p>
              </div>
            </div>
            <div className="feature">
              <div className="featureIcon">
                <FaList />
              </div>
              <div className="featureText">
                <p>
                  <strong>Category</strong>
                </p>
                <p>{category}</p>
              </div>
            </div>
            <div className="feature">
              <div className="featureIcon">
                <FaClock />
              </div>
              <div className="featureText">
                <p>
                  <strong>Duration</strong>
                </p>
                <p>{duration} hours</p>
              </div>
            </div>
            <div className="feature">
              <div className="featureIcon">
                <FaStar />
              </div>
              <div className="featureText">
                <p>
                  <strong>Rating</strong>
                </p>
                <p>
                  <Rating
                    emptySymbol="far fa-star icon"
                    fullSymbol="fas fa-star icon"
                    initialRating={rating}
                    readonly
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="checkoutButton">
            <div className="priceTag">
              <span>$</span>
              {price}
            </div>
            <button className="btn btn-primary" onClick={props.onAddToCart}>
              <FaShoppingCart />
              <span className="ms-2">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
