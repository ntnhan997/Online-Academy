import styled from "styled-components";

export const PopularWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  body {
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 30px;
  }

  .cards_wrap .card_item {
    width: 20%;
  }

  .product-grid {
    border-radius: 10px;
    text-align: center;
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
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
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
    left: 70%;
    z-index: 1;
    transition: all 0.3s ease 0s;
  }
  .product-grid:hover .social {
    opacity: 1;
    top: 90%;
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
  .product-grid .social li a:hover {
    color: #fff;
    background-color: #ef5777;
  }
  .product-grid .social li a:after,
  .product-grid .social li a:before {
    content: attr(data-tip);
    color: #fff;
    background-color: #000;
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 20px;
    padding: 1px 5px;
    white-space: nowrap;
    opacity: 0;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: -30px;
  }
  .product-grid .social li a:after {
    content: "";
    height: 15px;
    width: 15px;
    border-radius: 0;
    transform: translateX(-50%) rotate(45deg);
    top: -20px;
    z-index: -1;
  }
  .product-grid .social li a:hover:after,
  .product-grid .social li a:hover:before {
    opacity: 1;
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

  /*content card*/
  .product-grid .product-content {
    background-color: var(--mainTransparent);
    text-align: left;
    padding: 12px 0;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -145px;
    z-index: 1;
    transition: all 0.3s;
  }

  .product-grid:hover .product-content {
    bottom: 0px;
  }
  /*end content card*/

  /*tags*/
  .tags {
    position: relative;
    margin-top: 5px;
  }
  .tags span {
    padding: 2px 5px;
    margin-right: 5px;
    color: #fff;
    display: inline-block;
    border-radius: 4px;
  }
  .tags span.category {
    background: #7206f7;
  }
  .tags span.branch {
    background: #f70661;
  }
  /*end tags*/

  /*title*/

  .product-grid .title {
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    transition: all 0.3s ease 0s;
  }
  .product-grid .title a {
    text-decoration: none;
  }

  .product-grid .title a {
    color: #fff;
  }
  .product-grid .title span {
    color: #ff9800;
  }

  .product-grid .title a:hover,
  .product-grid:hover .title a {
    color: #ef5777;
  }
  /*end title*/

  /*info*/
  .info {
    color: #000;
  }
  .info p {
    margin: 15px 0 10px;
  }
  /*end info*/

  /* lecterer */
  .star {
    position: relative;
  }

  .star h4 {
    margin: 0;
    padding: 0;
    font-size: 20px;
    color: #f7f406;
  }
  .star ul {
    padding: 0;
    display: flex;
  }

  .star ul li {
    list-style: none;
    width: 35px;
    height: 35px;
    background: #fff;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 6px;
    border: 2px solid #fff;
  }

  .star ul li img {
    width: 100%;
  }
  /* end of lecterer*/

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
      width: 25%;
    }
  }
`;
