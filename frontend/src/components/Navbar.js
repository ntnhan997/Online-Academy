import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import parseJwt from "../utils";
import { LogOut } from "../actions/userAction";

export default function Navbar() {
  const user = useSelector((state) => state.loginUser);
  const { users } = user;

  const dispatch = useDispatch();
  const history = useHistory();
  const [check, setCheck] = useState(false);


  const [search,setSearch] = useState("");

  const handleSearch = (search) => {
    if(search !== ""){
      history.push("/Course/SearchFullText/result?name=" + search);
      setSearch("");
    }

  }



  useEffect(() => {
   
    if (check === true) {
      localStorage.removeItem("accessToken_OA");
      dispatch(LogOut());
      setCheck(false);
    }

    const documentStyle = document.documentElement.style;
    const handleScroll = (e) => {
      if (window.scrollY === 0) {
        documentStyle.setProperty("--navbar-background-color", "transparent");
      } else {
        documentStyle.setProperty(
          "--navbar-background-color",
          "var(--mainTransparent)"
        );
      }
    };



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

    // cleanup this component
    return () => {
      // window.removeEventListener("scroll", handleScroll);
    };
  }, [check, dispatch]);

  return (
    <nav className="navbar">
      <div className="container">
        <input type="checkbox" id="check" />
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
              {users !== null && parseJwt(users.accessToken).Role === 1 ? (
                <li className="nav-link two">
                  <Link to="/SearchFullText">
                    Feature
                    <i className="fas fa-caret-down" />
                  </Link>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <Link to="/">Category</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to="/">
                          Teacher
                          <i className="fas fa-caret-down" />
                        </Link>
                        <div className="dropdown second">
                          <ul>
                            <li className="dropdown-link">
                              <Link to="/admin/listedteacher">Listed</Link>
                            </li>
                            <li className="dropdown-link">
                              <Link to="/admin/createteacher">Create</Link>
                            </li>
                            <li className="dropdown-link">
                              <Link to="/">Delete</Link>
                            </li>
                            <li className="dropdown-link">
                              <Link to="/">Update</Link>
                            </li>
                            <div className="arrow" />
                          </ul>
                        </div>
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
              ) : (
                <li className="nav-link two">
                  <Link to="/SearchFullText">
                    Categories
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
              )}
              {users !== null && parseJwt(users.accessToken).Role === 1 ? (
                ""
              ) : (
                <li>
                  <input
                    type="text"
                    className="input-search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn-search"
                    onClick={() => handleSearch(search)}
                  >
                    Search
                  </button>
                </li>
              )}

              {/* <li className="nav-link three">
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
              </li> */}
              {/* <li className="nav-link four">
                <Link to="/">About</Link>
              </li> */}
            </ul>
          </div>
          <div className="log-sign five">
            {users != null ? (
              <>
                {/* <Link to="/wishlist" className="btn solid">
                  Wish List
                </Link> */}
                <div className="nav-links">
                  <ul>
                    <li className="nav-link four">
                      <Link to="/">{parseJwt(users.accessToken).FullName}</Link>
                      {users !== null &&
                      parseJwt(users.accessToken).Role === 3 ? (
                        <div className="dropdown">
                          <ul>
                            <li className="dropdown-link">
                              <Link to="/wishlist">Wish List</Link>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        ""
                      )}
                    </li>
                  </ul>
                </div>

                <Link
                  to="/login"
                  className="btn transparent"
                  onClick={() => setCheck(true)}
                >
                  Log out
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="btn transparent">
                  Log in
                </Link>
                <Link to="/register" className="btn solid">
                  Sign up
                </Link>
              </>
            )}
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
