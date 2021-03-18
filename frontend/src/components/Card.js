import React from "react";
import bootstrap from "../images/bootstrap.jpg";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IncrementViewAction } from "../actions/courseAction";

export default function Card(props) {
  const dispatch = useDispatch();

  const handleIncrementView = (CourseId) => {
    dispatch(IncrementViewAction(CourseId));
  }
  const {
    id,
    title,
    price,
    category,
    bgPhoto,
    totalReviews,
    ratingAverage,
    descriptions,
    TeacherName,
    Avatar,
    CategoryName
  } = props;
  return (
    <div className="card_item">
      <div className="product-grid">
        <div className="product-image">
        <Link to={"/" + CategoryName + "/" + id} onClick={() => handleIncrementView(id)}>
            <img
              className="pic-1"
              src={bgPhoto ? bgPhoto : bootstrap}
              alt="bootstrap"
            />
        </Link>
          <span className="product-new-label">
            {price ? price + "$" : "Sale"}
          </span>
          <span className="product-discount-label">0%</span>
        </div>
        <div className="middle" />
        <div className="product-content">
          <h3 className="title">
            <Link to={"/" + CategoryName + "/" + id} onClick={() => handleIncrementView(id)}>
              {title ? title : "Title Title(2021)"}
            </Link>
            <br />
            <span>Created by {TeacherName? TeacherName : "aaa"}</span>
          </h3>
          {/* <ul className="social">
            <li>
              <a href="fb.com" data-tip="View Details">
                <i className="fa fa-search" />
              </a>
            </li>
            
          </ul> */}
          <div>
            <Rating
              name="half-rating"
              value={ratingAverage ? ratingAverage : 0}
              precision={0.5}
              readOnly
            />
            {/* <br /> */}
            <p>({totalReviews ? totalReviews : 0} Reviews)</p>
          </div>
          <div className="tags">
            <span className="category">{category ? category : "Category"}</span>
            {/* <span className="branch">Mobile</span> */}
          </div>
          <div className="info">
            <p>
              {
                descriptions? descriptions : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, voluptas."
              }
             
            </p>
          </div>
          <div className="star">
            <h4>Lecturer</h4>
            <ul>
              <li>
                <img src={Avatar} alt="aaaa" />
              </li>
              {/* <li>
                <img src={l2} alt="aaaa" />
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
