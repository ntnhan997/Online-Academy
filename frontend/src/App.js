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

function App() {
  return (
    <>
      <div className="app-header">
        <Navbar />
      </div>
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/categories/:name" component={Categories} />
          <Route exact path="/:CategoryName/:id" component={Course} />
          <Route
            exact
            path="/learning/javascript/:id"
            component={ContainVideo}
          />
          <Route exact path="/wishlist" component={WishListUser} />
          <Route exact path="/register" component={RegisterUser} />
          <Route exact path="/login" component={LogIn} />
        </Switch>
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
