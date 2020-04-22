import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Login from './component/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './component/Home';
import auth from './firebase';

function App() {


  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null
  });

  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null
        });
      }
    });

    return () => {
      handleAuth();
    };
  }, []);

  const handleLogout = () => {
    auth.signOut().then(response => {
      setSession({
        isLoggedIn: false,
        currentUser: null
      });
    });
  };
  return (
    <div>
      {session.isLoggedIn ? (
        <header >


          <h1>Ahoy!, {session.currentUser && session.currentUser.email}</h1>

          <button type="button" onClick={handleLogout}>
            Logout
        </button>
        </header>
      ) : (
          <Login setSession={setSession} />
        )}
    </div>
  );
}

export default App;



// <Router>
//           <Switch>
//             <Route path = '/' exact component = {Home}/>
//             {/* <Route path = '/login' exact component = {Login}/> */}
//           </Switch>
//         </Router>