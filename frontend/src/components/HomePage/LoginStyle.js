import styled from "styled-components";

export const LoginWrapper = styled.div`
  .body {
    display: grid;
    height: 100%;
    width: 100%;
    place-items: center;
    background-image: url(https://i.imgur.com/eRPufbZ.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  ::selection {
    background: #fa4299;
    color: #fff;
  }
  .wrapper {
    overflow: hidden;
    max-width: 390px;
    background: #fff;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    margin: 100px 0;
  }
  .wrapper .title-text {
    display: flex;
    width: 200%;
  }
  .wrapper .title {
    width: 50%;
    font-size: 35px;
    font-weight: 600;
    text-align: center;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .wrapper .slide-controls {
    position: relative;
    display: flex;
    height: 50px;
    width: 100%;
    overflow: hidden;
    margin: 30px 0 10px 0;
    justify-content: space-between;
    border: 1px solid lightgrey;
    border-radius: 5px;
  }
  .slide-controls .slide {
    height: 100%;
    width: 100%;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    line-height: 48px;
    cursor: pointer;
    z-index: 1;
    transition: all 0.6s ease;
  }
  .slide-controls label.signup {
    color: #000;
  }
  .slide-controls .slider-tab {
    position: absolute;
    height: 100%;
    width: 50%;
    left: 0;
    z-index: 0;
    border-radius: 5px;
    background: -webkit-linear-gradient(left, #a445b2, #fa4299);
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  input[type="radio"] {
    display: none;
  }
  #signup:checked ~ .slider-tab {
    left: 50%;
  }
  #signup:checked ~ label.signup {
    color: #fff;
    cursor: default;
    user-select: none;
  }
  #signup:checked ~ label.login {
    color: #000;
  }
  #login:checked ~ label.signup {
    color: #000;
  }
  #login:checked ~ label.login {
    cursor: default;
    user-select: none;
  }
  .wrapper .form-container {
    width: 100%;
    overflow: hidden;
  }
  .form-container .form-inner {
    display: flex;
    width: 200%;
  }
  .form-container .form-inner form {
    width: 50%;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .form-inner form .field {
    height: 50px;
    width: 100%;
    margin-top: 20px;
  }
  .form-inner form .field input {
    height: 100%;
    width: 100%;
    outline: none;
    padding-left: 15px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    border-bottom-width: 2px;
    font-size: 17px;
    transition: all 0.3s ease;
  }
  .form-inner form .field input:focus {
    border-color: #fc83bb;
  }
  .form-inner form .field input::placeholder {
    color: #999;
    transition: all 0.3s ease;
  }
  form .field input:focus::placeholder {
    color: #b3b3b3;
  }
  .form-inner form .pass-link {
    margin-top: 5px;
  }
  .form-inner form .signup-link {
    text-align: center;
    margin-top: 30px;
  }
  .form-inner form .pass-link a,
  .form-inner form .signup-link a {
    color: #fa4299;
    text-decoration: none;
  }
  .form-inner form .pass-link a:hover,
  .form-inner form .signup-link a:hover {
    text-decoration: underline;
  }
  form .btn {
    height: 50px;
    width: 100%;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
  }
  form .btn .btn-layer {
    height: 100%;
    width: 300%;
    position: absolute;
    left: -100%;
    background: -webkit-linear-gradient(
      right,
      #a445b2,
      #fa4299,
      #a445b2,
      #fa4299
    );
    border-radius: 5px;
    transition: all 0.4s ease;
  }
  form .btn:hover .btn-layer {
    left: 0;
  }
  form .btn .button[type="button"] {
    height: 100%;
    width: 100%;
    z-index: 1;
    position: relative;
    background: none;
    border: none;
    color: #fff;
    padding-left: 0;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
  }
`;
