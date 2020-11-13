import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Listing from "./pages/Listing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PropertyDetail from "./components/PropertyDetail";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/listing" exact component={Listing} />
          <Route path="/listing/:id" component={PropertyDetail} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
