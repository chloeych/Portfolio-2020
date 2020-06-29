import React from 'react';
import {Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import './App.css';

//import pages 
import About from './pages/About.js'; 
import Experience from './pages/Experience.js'; 
import Work from './pages/Work.js'; 

//import components 
import Header from'./components/Header.js';

function App() {
  return (
    <div className="App">
      <Header/>

      <Router>

        <Route path="/about">
         <About/>
        </Route>

        <Route path="/experience">
         <Experience/>
        </Route>

        <Route path="/work">
         <Work/>
        </Route>

      </Router>

    </div>
    
  );
}

export default App;
