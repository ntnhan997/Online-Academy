import React from "react";
import bootstrap from "../images/bootstrap.png";

import Rating from '@material-ui/lab/Rating';
import {Link} from "react-router-dom";


export default function Card(props) {
  const {id, title, price,category, bgPhoto, totalReviews, ratingAverage} = props;
  return (
    <div className="card_item">
      <div className="product-grid">
        <div className="product-image">
          <a href="fb.com">
            <img className="pic-1" src={bgPhoto ? bgPhoto: bootstrap} alt="bootstrap" />
          </a>
          <span className="product-new-label">{price ? price + "$" : "Sale"}</span>
          <span className="product-discount-label">0%</span>
        </div>
        <div className="middle">
          <ul className="social">
            <li>
              <a href data-tip="Quick View">
                <i className="fa fa-search" />
              </a>
            </li>
            <li>
              <a href data-tip="Add to Wishlist">
                <i className="fa fa-shopping-bag" />
              </a>
            </li>
            <li>
              <a href data-tip="Add to Cart">
                <i className="fa fa-shopping-cart" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="rating">
          <Rating name="half-rating" defaultValue={ratingAverage? ratingAverage: 1} precision={0.5} readOnly/><p>({totalReviews ? totalReviews : 0} Reviews)</p>
        </ul>
        <div className="product-content">
          <h3 className="title">
            <Link to={"/categories/LapTrinh/" + id}>{title ? title : "title"}</Link>
          </h3>
          <div className="price">
            Lorem
            <p>{category? category: "category"}</p>
          </div>
          <a className="add-to-cart" href>
            + Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
}
