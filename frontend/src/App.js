import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
