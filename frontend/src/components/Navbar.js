import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import parseJwt from "../utils";
import store from "../store";
import { LogOut } from "../actions/userAction";

export default function Navbar(){

  // user = useSelector(state => state.loginUser);
  //const state = this.getCurrentStateFromStore();
  const user = useSelector(state => state.loginUser);
  const {users} = user;
  const handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  const documentStyle = document.documentElement.style;
  const initalNavbarBackgroundColor = "transparent";
  const scrolledNavbarBackgroundColor = "var(--mainTransparent)";

  const handleScroll = () => {
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
  const dispatch = useDispatch();

  const [check,setCheck] = useState(false);

  useEffect(() => {
    if(check == true){
      localStorage.removeItem("accessToken_OA");
      dispatch(LogOut());
    }
    // if(localStorage.getItem("authenticated_OA") === null){
    //   localStorage.setItem("authenticated_OA", false);
    // }
    window.addEventListener("scroll", handleScroll);

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
      window.removeEventListener("scroll", handleScroll);
  }, [check,users])
  
  // componentDidMount() {
    
  
  //   window.addEventListener("scroll", this.handleScroll);

  //   let acc = document.getElementsByClassName("accordion");
  //   let i = 0;
  //   for (i = 0; i < acc.length; i++) {
  //     acc[i].addEventListener("mouseover", function () {
  //       this.classList.toggle("active");
  //     });
  //   }
  //   for (i = 0; i < acc.length; i++) {
  //     acc[i].addEventListener("mouseout", function () {
  //       this.classList.remove("active");
  //     });
  //   }
  // }

  const getCurrentStateFromStore = () => {
    return {
      loginUser: store.getState().loginUser.users,
    };
  }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

    console.log(users);
    // const usersss =  parseJwt(localStorage.getItem("accessToken_OA"));
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
              {users != null ?(
                <>
                  <p>{parseJwt(users.accessToken).FullName}</p>
                  <Link to="/login" className="btn transparent" onClick={() => setCheck(true)}>
                    Log out
                  </Link>
                </>
              ) :(
                
                <>
                  <Link to="/login" className="btn transparent">
                    Log in
                  </Link>
                  <Link to="/register" className="btn solid">
                    Sign up
                  </Link>
                </>
              )}

              {/* <Link to="/wishlist" className="btn solid">
                WishList
              </Link> */}
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
