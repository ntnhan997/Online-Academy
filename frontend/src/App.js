import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/categories/:name" component={Categories} />
      </Switch>
    </>
  );
}

export default App;
