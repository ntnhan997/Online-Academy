import styled from "styled-components";

export const HomeWrapper = styled.div`
  .slick-dots {
    bottom: 2.6vw;
  }

  .slick-dots li button {
    width: 20px;
    height: 20px;
    border: 1px solid var(--mainBlack);
    border-radius: 20px;
  }

  .slick-dots li button:before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    content: "";
    text-align: center;
    opacity: 0.5;
    color: var(--mainBlack);
    background-color: var(--mainWhite);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .slick-dots li.slick-active button,
  .slick-dots li:hover button {
    border-color: tomato;
  }

  .slick-dots li.slick-active button:before,
  .slick-dots li:hover button:before {
    background-color: tomato;
    opacity: 1;
  }

  /*Arrow-left and right*/

  .slides {
    position: relative;
  }
  .slides .slick-prev,
  .slides .slick-next {
    position: absolute;
    top: 50%;
    z-index: 1;
  }

  .slick-arrow {
    background-color: var(--mainTransparent);
    height: 70px;
    width: 70px;
    border-radius: 100%;
  }

  .slick-arrow:hover,
  .slick-arrow:active {
    background-color: red !important;
  }

  /*arrow style*/
  .slick-prev:before {
    font-family: FontAwesome;
    content: "\f053"; /*f104*/
    font-size: 22px;
  }
  .slick-next:before {
    font-family: FontAwesome;
    content: "\f054"; /*f105*/
    font-size: 22 px;
  }
  
  /*arrow L&R position*/
  .slides .slick-prev {
    left: 2%;
  }

  .slides .slick-next {
    right: 2%;
  }
`;
