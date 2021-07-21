import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import LandingPage from "./Pages/LandingPage";

function App() {

 
  return (
    <div>
          <Router>
      <div>
        <Switch>
          <Route path="/birthdays">
           Hi
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
