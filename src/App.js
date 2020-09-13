import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./App.css";
// import profile from "./images/profile.jpg";


function App() {
  return (
    <Router>
      <div>
     
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
