import React from "react";
import bootstrap from "../images/bootstrap.png";
export default function Card() {
  return (
    <div class="card_item">
      <div class="product-grid">
        <div class="product-image">
          <a href="#">
            <img class="pic-1" src={bootstrap} />
          </a>
          <span class="product-new-label">Sale</span>
          <span class="product-discount-label">20%</span>
        </div>
        <div class="middle">
          <ul class="social">
            <li>
              <a href="" data-tip="Quick View">
                <i class="fa fa-search"></i>
              </a>
            </li>
            <li>
              <a href="" data-tip="Add to Wishlist">
                <i class="fa fa-shopping-bag"></i>
              </a>
            </li>
            <li>
              <a href="" data-tip="Add to Cart">
                <i class="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
        <ul class="rating">
          <li class="fa fa-star"></li>
          <li class="fa fa-star"></li>
          <li class="fa fa-star"></li>
          <li class="fa fa-star"></li>
          <li class="fa fa-star disable"></li>
        </ul>
        <div class="product-content">
          <h3 class="title">
            <a href="#">Women's Blouse</a>
          </h3>
          <div class="price">
            $16.00
            <span>$20.00</span>
          </div>
          <a class="add-to-cart" href="">
            + Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
}
