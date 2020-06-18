import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Contact from "./Containers/Contact";
import Projects from "./Containers/Projects";
import Services from "./Containers/Services";
import NavBar from './Containers/NavBar';
import Landing from './Containers/Landing';

function App() {

  useEffect(() => {
    document.title = "wyattwilliams.dev";
  }, [])

  return (
    <>
    <Router>
      <div className="App">
        <NavBar />
        <div className='content'> 
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/" component={Landing} />

          <Route component={() => <h1 style={{textAlign: 'center'}}>Page not found</h1>} />
        </Switch>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
