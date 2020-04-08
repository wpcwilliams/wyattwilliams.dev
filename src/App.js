import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./Containers/Layout";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

import About from "./Containers/About";
import Contact from "./Containers/Contact";
import Projects from "./Containers/Projects";
import Services from "./Containers/Services";
import Footer from "./Containers/Footer";


function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Layout />
        <div className='content'> 
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/" component={About} />

          <Route component={() => <h1 style={{textAlign: 'center'}}>Page not found</h1>} />
        </Switch>
        </div>
        <Footer/>
      </div>
    </Router>


    </>
  );
}

export default App;
