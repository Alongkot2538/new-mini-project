import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Login from './component/Login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './component/Home';

function App() {
  return (
    <div >
        <Router>
          <Switch>
            <Route path = '/' exact component = {Home}/>
            <Route path = '/login' exact component = {Login}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
