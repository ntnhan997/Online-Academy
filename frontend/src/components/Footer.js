import styled from "styled-components";
import React from "react";

export default function Footer() {
  return (
    <FooterWrapper>
      <footer>
        <div className="container">
          <div className="sec aboutus">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              quas nisi. Voluptatum necessitatibus officia, accusantium aut id
              sapiente excepturi provident eveniet corrupti corporis molestiae
              consequatur voluptatem totam pariatur culpa in!
            </p>
            <ul className="sci">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fa fa-facebook" aria-hidden="+true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <i className="fa fa-twitter" aria-hidden="+true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fa fa-instagram" aria-hidden="+true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <i className="fa fa-youtube-play" aria-hidden="+true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quickLinks">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/FAQ">FAQ</a>
              </li>
              <li>
                <a href="/Privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/Help">Help</a>
              </li>
              <li>
                <a href="/Term">Terms & Consitions</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="sec contact">
            <h2>Contact Info</h2>
            <ul>
              <div className="info">
                <li>
                  <span>
                    <i className="fa fa-map-marker" aria-hidden="+true"></i>
                  </span>
                  <span>
                    172 Tran Phu street <br />
                    ward 9, district 5, Ho Chi Minh City
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-phone" aria-hidden="+true"></i>
                  </span>
                  <p>
                    <a href="tel:123456789">+036 9966 9966</a>
                    <br />
                    <a href="tel:123456789">+036 9966 9966</a>
                  </p>
                </li>
                <li>
                  <span>
                    <i className="fa fa-envelope" aria-hidden="+true"></i>
                  </span>
                  <p>
                    <a href="mailto:academy@email.com">academy@gmail.com</a>
                  </p>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrightText">
        <p>Copyright &copy; 2021 Online Academy. All Rights Reserved.</p>
      </div>
    </FooterWrapper>
  );
}
const FooterWrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
    background: #ede7f6;
  }
  footer {
    position: relative;
    width: 100%;
    height: auto;
    padding: 50px 100px;
    background: #111;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  footer .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
  }
  footer .container .sec {
    margin-right: 30px;
  }
  footer .container .sec.aboutus {
    width: 40%;
  }
  footer .container h2 {
    position: relative;
    color: #fff;
    font-weight: 500;
    margin-bottom: 15px;
  }
  footer .container h2:before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 2px;
    background: #f00;
  }

  footer p {
    color: #999;
  }
  .sci {
    margin-top: 20px;
    display: flex;
  }
  .sci li {
    list-style: none;
  }
  .sci li a {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    text-decoration: none;
    border-radius: 4px;
  }
  .sci li a:hover {
    background: #f00;
  }
  .sci li a .fa {
    color: #fff;
    font-size: 20px;
  }
  .quickLinks {
    position: relative;
    width: 25%;
  }
  .quickLinks ul li {
    list-style: none;
  }
  .quickLinks ul li a {
    color: #999;
    text-decoration: none;
    margin-bottom: 10px;
    display: inline-block;
  }
  .quickLinks ul li a:hover {
    color: #fff;
  }
  .contact {
    width: calc(35%-60px);
    margin-right: 0 !important;
  }
  .contact .info {
    position: relative;
  }
  .contact .info li {
    display: flex;
    margin-bottom: 16px;
    list-style: none;
  }
  .contact .info li span:nth-child(1) {
    color: #fff;
    font-size: 20px;
    margin-right: 10px;
  }
  .contact .info li span {
    color: #999;
  }
  .contact .info li a {
    color: #999;
    text-decoration: none;
  }
  .contact .info li a:hover {
    color: #fff;
  }
  .copyrightText {
    width: 100%;
    background: #181818;
    padding: 8px 100px;
    text-align: center;
    color: #999;
  }
  @media (max-width: 991px) {
    footer {
      padding: 40px;
    }
    footer .container {
      flex-direction: column;
    }
    footer .container .sec {
      margin-right: 0;
      margin-bottom: 40px;
    }
    footer .container .sec.aboutus,
    .quickLinks,
    .contact {
      width: 100%;
    }
    .copyrightText {
      padding: 8px 40px;
    }
  }
`;
