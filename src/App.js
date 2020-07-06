import React from 'react';
import {Route, BrowserRouter as Router, Redirect, Switch} from 'react-router-dom';
import './App.css';

//import pages 
import About from './pages/About.js'; 
import Experience from './pages/Experience.js'; 
import Work from './pages/Work.js'; 
import Dashboard from './pages/Dashboard.js';

//import components 
import Header from'./components/Header.js';

function App() {
  return (
    <div className="App">
      <Header/>

      <Router>
        <Route exact path="/">
        <Dashboard/>
        </Route>

        <Route exact path="/about">
         <About/>
        </Route>
       
        <Route exact path="/experience">
         <Experience/>
        </Route>

        <Route exact path="/work">
         <Work/>
        </Route>

      </Router>

    </div>
    
  );
}

export default App;
