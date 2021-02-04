import React, { Component } from "react";
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
        <div className="container">
          <input type="checkbox" name id="check" />
          <div className="logo-container">
            <h3 className="logo">
              Online<span>Academy</span>
            </h3>
          </div>
          <div className="nav-btn">
            <div className="nav-links">
              <ul>
                <li className="nav-link one">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-link two">
                  <Link to="/">
                    Menu
                    <i className="fas fa-caret-down" />
                  </Link>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <Link to="/">Link 1</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to="/">Link 2</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to="/">
                          Link 3<i className="fas fa-caret-down" />
                        </Link>
                        <div className="dropdown second">
                          <ul>
                            <li className="dropdown-link">
                              <Link to="/">Link 1</Link>
                            </li>
                            <li className="dropdown-link">
                              <Link to="/">Link 2</Link>
                            </li>
                            <li className="dropdown-link">
                              <Link to="/">Link 3</Link>
                            </li>
                            <li className="dropdown-link">
                              <Link to="/">
                                More
                                <i className="fas fa-caret-down" />
                              </Link>
                              <div className="dropdown second">
                                <ul>
                                  <li className="dropdown-link">
                                    <Link to="/">Link 1</Link>
                                  </li>
                                  <li className="dropdown-link">
                                    <Link to="/">Link 2</Link>
                                  </li>
                                  <li className="dropdown-link">
                                    <Link to="/">Link 3</Link>
                                  </li>
                                  <div className="arrow" />
                                </ul>
                              </div>
                            </li>
                            <div className="arrow" />
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown-link">
                        <Link to="/">Link 4</Link>
                      </li>
                      <div className="arrow" />
                    </ul>
                  </div>
                </li>
                <li className="nav-link three">
                  <Link to="/">
                    Services
                    <i className="fas fa-caret-down" />
                  </Link>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <Link to="/">Link 1</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to="/">Link 2</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to="/">
                          Link 3<i className="fas fa-caret-down" />
                        </Link>
                        <div className="dropdown second">
                          <ul>
                            <li className="dropdown-link">
                              <Link to="/">Link 1</Link>
                            </li>
                            <li className="dropdown-link">
                              <Link to="/">Link 2</Link>
                            </li>
                            <li className="dropdown-link">
                              <Link to="/">Link 3</Link>
                            </li>
                            <li className="dropdown-link">
                              <Link to="/">
                                More
                                <i className="fas fa-caret-down" />
                              </Link>
                              <div className="dropdown second">
                                <ul>
                                  <li className="dropdown-link">
                                    <Link to="/">Link 1</Link>
                                  </li>
                                  <li className="dropdown-link">
                                    <Link to="/">Link 2</Link>
                                  </li>
                                  <li className="dropdown-link">
                                    <Link to="/">Link 3</Link>
                                  </li>
                                  <div className="arrow" />
                                </ul>
                              </div>
                            </li>
                            <div className="arrow" />
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown-link">
                        <Link to="/">Link 4</Link>
                      </li>
                      <div className="arrow" />
                    </ul>
                  </div>
                </li>
                <li className="nav-link four">
                  <Link to="/">About</Link>
                </li>
              </ul>
            </div>
            <div className="log-sign five">
              <Link to="/" className="btn transparent">
                Log in
              </Link>
              <Link to="/" className="btn solid">
                Sign up
              </Link>
            </div>
          </div>
          <div className="hamburger-menu-container">
            <div className="hamburger-menu">
              <div />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
