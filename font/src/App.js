import React from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from './component/Admin';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './component/Login';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
     {/* <Admin/> */}
     <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/admin' exact component={Admin}/>
        
      </Switch>

    </Router>
    </div>
  );
}

export default App;