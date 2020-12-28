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
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        // let panel = this.nextElementSibling;
        // if (panel.style.display === "block") {
        //   panel.style.display = "none";
        // } else {
        //   panel.style.display = "block";
        // }
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
              <Link className="accordion" to="/">
                Courses
              </Link>
              <ul className="drop-menu">
                <li>
                  <Link className="" to="/">
                    Drop menu 1
                  </Link>
                  <Link className="" to="/">
                    Drop menu 2
                  </Link>
                  <Link className="" to="/">
                    Drop menu 3
                  </Link>
                  <Link className="" to="/">
                    Drop menu 4
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
