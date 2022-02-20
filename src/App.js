import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
        <NavBar/> 
        <Switch>
          <Route exact path="/NewsMonkey"><News key="general" pageSize={6} country="in" category="general"/></Route> 
          <Route exact path="/NewsMonkey/business"><News key="business" pageSize={6} country="in" category="business"/></Route> 
          <Route exact path="/NewsMonkey/entertainment"><News key="entertainment" pageSize={6} country="in" category="entertainment"/></Route> 
          <Route exact path="/NewsMonkey/general"><News key="general" pageSize={6} country="in" category="general"/></Route> 
          <Route exact path="/NewsMonkey/health"><News key="health" pageSize={6} country="in" category="health"/></Route> 
          <Route exact path="/NewsMonkey/science"><News key="science" pageSize={6} country="in" category="science"/></Route> 
          <Route exact path="/NewsMonkey/sports"><News key="sports" pageSize={6} country="in" category="sports"/></Route> 
          <Route exact path="/NewsMonkey/technology"><News key="technology" pageSize={6} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
  }
}