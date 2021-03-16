import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./index.css";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
    return (
      <div>
        <Router>
        <Header />
         <Switch> 
           <Route exact path="/"> 
             <Main />
           </Route>
         </Switch>
         <Footer />
        </Router>
      </div>
    );
}

export default App;
