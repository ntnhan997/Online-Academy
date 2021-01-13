import styled from "styled-components";

export const PopularWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  body {
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
  }

  .wrapper {
    width: 100%;
    margin: 10px auto;
  }
  .wrapper h1 {
    padding: 10px 70px;
  }

  .cards_wrap {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 30px;
  }

  .cards_wrap .card_item {
    width: 20%;
  }

  /*product card*/
  .product-grid {
    border-radius: 10px;
    text-align: center;
    padding: 0 0 72px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
    z-index: 1;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
  }

  .product-grid:hover {
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
  }

  .product-grid .product-image img {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }

  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  .product-grid:hover .product-image {
    opacity: 0.3;
  }

  .product-grid:hover .middle {
    opacity: 1;
  }

  /*product card*/

  /*social*/
  .product-grid .social {
    width: 150px;
    padding: 0;
    margin: 0;
    list-style: none;
    opacity: 0;
    transform: translateY(-50%) translateX(-50%);
    position: absolute;
    top: 60%;
    left: 50%;
    z-index: 1;
    transition: all 0.3s ease 0s;
  }
  .product-grid:hover .social {
    opacity: 1;
    top: 50%;
  }
  .product-grid .social li {
    display: inline-block;
  }
  .product-grid .social li a {
    color: #fff;
    background-color: #333;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    height: 40px;
    width: 40px;
    margin: 0 2px;
    display: block;
    position: relative;
    transition: all 0.3s ease-in-out;
  }
  /*end social*/

  /*sale */
  .product-grid .product-discount-label,
  .product-grid .product-new-label {
    color: #fff;
    background-color: #ef5777;
    font-size: 12px;
    text-transform: uppercase;
    padding: 2px 7px;
    display: block;
    position: absolute;
    top: 10px;
    left: 0;
  }

  .product-grid .product-discount-label {
    background-color: #333;
    left: auto;
    right: 0;
  }
  /*end sale*/

  /*rating*/
  .product-grid .rating {
    color: #ffd200;
    font-size: 12px;
    padding-bottom: 50px;
    margin: 0;
    list-style: none;
    position: relative;
    z-index: -1;
  }

  .product-grid .rating li.disable {
    color: rgba(0, 0, 0, 0.2);
  }
  /*end rating*/

  /*content card*/
  .product-grid .product-content {
    background-color: #fff;
    text-align: center;
    padding: 12px 0;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -30px;
    z-index: 1;
    transition: all 0.3s;
  }

  .product-grid:hover .product-content {
    bottom: 0px;
  }
  /*end content card*/

  /*title*/
  .product-grid .title {
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    margin: 0 0 10px;
    transition: all 0.3s ease 0s;
  }

  .product-grid .title a {
    color: #828282;
  }

  .product-grid .title a:hover,
  .product-grid:hover .title a {
    color: #ef5777;
  }
  /*end title*/

  /*price*/
  .product-grid .price {
    color: #333333;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.6px;
    margin-bottom: 8px;
    text-align: center;
    transition: all 0.3s;
  }
  .product-grid .price span {
    color: #999;
    font-size: 13px;
    font-weight: 400;
    text-decoration: line-through;
    margin-left: 3px;
    display: inline-block;
  }
  /*end price*/

  /*add to card*/
  .product-grid .add-to-cart {
    color: #000;
    font-size: 13px;
    font-weight: 600;
  }
  /*end add to card*/

  @media only screen and (max-width: 990px) {
    .product-grid {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 1024px) {
    .cards_wrap .card_item {
      width: 33.3%;
    }
  }

  @media (max-width: 768px) {
    .cards_wrap .card_item {
      width: 50%;
    }
  }

  @media (max-width: 528px) {
    .cards_wrap .card_item {
      width: 100%;
    }
  }
`;
