import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import Course from "./components/Categories/Course";
import Footer from "./components/Footer";
import ".././node_modules/video-react/dist/video-react.css";
import ContainVideo from "./components/Categories/ContainVideo.js";
import WishListUser from "./components/WishList";
import RegisterUser from "./components/RegisterUser";
import LogIn from "./components/LogIn";
import SearchFullText from "./components/SearchFullText";
import ScrollTop from "./ScrollTop";

import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RefreshTokenAction } from "./actions/userAction";
import parseJwt from "./utils";
import Admin from "./pages/Admin";
import CreateTeacher from "./components/Admin/CreateTeacher";

function App() {

  const user = useSelector((state) => state.loginUser);
  const { users } = user;
  const dispatch = useDispatch();
  useEffect(() => {
    clearInterval();
    if(users !== null){
      const decode = jwt_decode(users.accessToken);
      if(decode.exp < Date.now() / 1000){
        dispatch(RefreshTokenAction({
          accessToken: users.accessToken,
          refreshToken: users.refreshToken
        }));
      }
      
        setInterval(() => {
          if(decode.exp < Date.now() / 1000){
          dispatch(RefreshTokenAction({
            accessToken: users.accessToken,
            refreshToken: users.refreshToken
          }));
        }
        }, 7200000)
    }
  },[users, dispatch])

  return (
    <>
      <div className="app-header">
        <Navbar />
      </div>
      <div className="app-body">
        <Switch>
          <ScrollTop>
            {users !== null && parseJwt(users.accessToken).Role === 1 ? (
              <>
              <Route exact path="/" component={Admin} />
              <Route exact path="/admin/createteacher" component={CreateTeacher} />
              <Route exact path="/login" component={LogIn} />
              </>
            ) : (
              <>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/categories/:name" component={Categories} />
                <Route exact path="/:CategoryName/:id" component={Course} />
                <Route
                  exact
                  path="/learning/javascript/:CourseID/:LectureID"
                  component={ContainVideo}
                />
                <Route exact path="/wishlist" component={WishListUser} />
                <Route exact path="/register" component={RegisterUser} />
                <Route exact path="/login" component={LogIn} />
                <Route
                  exact
                  path="/Course/SearchFullText/result"
                  component={SearchFullText}
                />
              </>
            )}
          </ScrollTop>
        </Switch>
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
