import React from "react";
import "./Assets/app.css";
import "./Components/Header";
import "./Assets/header.css";
import "./Pages/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
      <>
          <div className="app">
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
      </>
  );
}

export default App;


