import React, { Component } from "react";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  documentStyle = document.documentElement.style;
  initalNavbarBackgroundColor = "transparent";
  scrolledNavbarBackgroundColor = "var(--mainTransparent)";

  handleScroll = () => {
    if (window.scrollY === 0) {
      this.documentStyle.setProperty(
        "--navbar-background-color",
        this.initalNavbarBackgroundColor
      );
    } else {
      this.documentStyle.setProperty(
        "--navbar-background-color",
        this.scrolledNavbarBackgroundColor
      );
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    let acc = document.getElementsByClassName("accordion");
    let i = 0;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("mouseover", function () {
        this.classList.toggle("active");
      });
    }
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("mouseout", function () {
        this.classList.remove("active");
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="educate logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link className="accordion" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="accordion">Courses</Link>
              <ul className="drop-menu">
                <li>
                  <Link className="" to="/categories/development">
                    Development
                  </Link>
                  <Link className="" to="/categories/design">
                    Design
                  </Link>
                  <Link className="" to="/categories/marketing">
                    Marketing
                  </Link>
                  <Link className="" to="/categories/lifestyle">
                    Lifestyle
                  </Link>
                  <Link className="" to="/categories/health-and-fitness">
                    Health & Fitness
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="accordion" to="/">
                Options
              </Link>
              {/* <div class="panel">
                <p>Lorem ipsum...</p>
              </div> */}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
