import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About/index";
import Portfolio from "./components/pages/Portfolio/index";
import Contact from "./components/pages/Contact/index";
import "./App.css";
// import profile from "./images/profile.jpg";


function App() {
  return (
    <Router>
      <div >
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
