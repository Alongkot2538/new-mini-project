import React from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from './component/Admin';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './component/Login';
import Index from './component/Index';
import User from './component/User';
import Home from './component/Home'
import Sell from './component/Sell'

function App() {
  return (
    <div className="App">
     {/* <Admin/> */}
     <Router>
      <Switch>
        <Route path='/' exact component={Index}/>
        <Route path='/admin' exact component={Admin}/>
        <Route path='/user' exact component={User}/>
        <Route path='/Home' exact component={Home}/>
        <Route path='/Sell' exact component={Sell}/>
      </Switch>

    </Router>
    </div>
  );
}

export default App;