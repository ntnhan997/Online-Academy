import React from "react";
import bootstrap from "../images/bootstrap.png";
export default function Card() {
  return (
    <div className="card_item">
      <div className="product-grid">
        <div className="product-image">
          <a href="fb.com">
            <img className="pic-1" src={bootstrap} alt="bootstrap" />
          </a>
          <span className="product-new-label">Sale</span>
          <span className="product-discount-label">20%</span>
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
          <li className="fa fa-star" />
          <li className="fa fa-star" />
          <li className="fa fa-star" />
          <li className="fa fa-star" />
          <li className="fa fa-star disable" />
        </ul>
        <div className="product-content">
          <h3 className="title">
            <a href="fb.com">Women's Blouse</a>
          </h3>
          <div className="price">
            $16.00
            <span>$20.00</span>
          </div>
          <a className="add-to-cart" href>
            + Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
}
