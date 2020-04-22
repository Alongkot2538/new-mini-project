import React, { useState } from 'react'
import Navbar from './Navbar'
import auth from '../firebase';
// import Home from '../Home';

const Login = ({setSession}) => {

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await auth.signInWithEmailAndPassword(
        username,
        password
      );

      const { user } = response;

      setSession({
        isLoggedIn: true,
        currentUser: user
      });
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.message
      });
    }
  };

  const handleRegister = async () => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        username,
        password
      );

      const { user } = response;

      setSession({
        isLoggedIn: true,
        currentUser: user
      });
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.essage
      });
    }
  };

  const handleUsername = event => {
    setUsername(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };
    return (
<div>
     <div class="container-fluid"><h1>My First Bootstrap Page</h1></div>
    <div class ="row"></div>
    






</div>



        
        // <div>
        //     {/* <Navbar /> */}

        // login

        //     <input type="email" placeholder="E-mail" onChange={handleUsername} />
        //     <input type="password" placeholder="password" onChange={handlePassword} />
        //     <button type="button" onClick={handleLogin}>Login</button>
        //     <button type="button" onClick={handleRegister}>Register</button>
        // </div>
    )
}
export default Login;