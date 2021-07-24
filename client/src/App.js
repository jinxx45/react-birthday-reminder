import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import LandingPage from "./Pages/LandingPage";
import MainPage from "./Pages/MainPage";

function App() {

 
  return (
    <div>
          <Router>
      <div>
        <Switch>
          <Route path="/birthdays">
            <MainPage/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
