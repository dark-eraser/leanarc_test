import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Login, Pizza, Salad, Drinks, Sweets, ToggleSwitch } from "./components";
import "./app.css"
function App() {
  return (
    <div className="App">
      
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/pizza" exact component={() => <Pizza />} />
          <Route path="/salad" exact component={() => <Salad />} />
          <Route path="/drinks" exact component={() => <Drinks />} />
          <Route path="/sweets" exact component={() => <Sweets />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/login" exact component={() => <Login />} />
          
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
