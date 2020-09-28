import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./App.css";
import HappilyWokePage from "./pages/HappilyWoke";
import RabbitHolePage from "./pages/RabbitHole";
import EaterPage from "./pages/Eater";

function App() {
  return (
    <Router>
      <div>
     
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/happilyWoke" component={HappilyWokePage} />
        <Route path="/RabbitHole" component={RabbitHolePage} />
        <Route path="/Eater" component={EaterPage} />
      </div>
    </Router>
  );
}

export default App;
