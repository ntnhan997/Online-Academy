import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import Course from "./components/Categories/Course";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/categories/:name" component={Categories} />
        <Route exact path = "/categories/:name/:id" component = {Course} />
      </Switch>
    </>
  );
}

export default App;
