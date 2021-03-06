import React, { useState } from 'react';
import auth from '../firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from 'firebase'
import Admin from './Admin'
export default function Login({ setSession }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      if (username == "5735512161@psu.ac.th" && password == "123456") {
        const response = await auth.signInWithEmailAndPassword(
          username,
          password
        );

        const { user } = response;

        setSession({
          isLoggedIn: true,
          currentUser: user
        });
      }
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
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  return (
    <div className="container" >
      <div className="backgroung">
        {/* <p1>{username} {password}asdas</p1> */}
        <h1>Admin Login</h1>
        <div class="form-inline" style={{ marginLeft: "140px" }}>
          <label for="email">Email address: </label>
          <input class="form-control"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label for="pwd"><br />Password: </label>
          <input
            type="password"
            class="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
          <button style={{ marginLeft: "8px" }} class="btn btn-primary"
            onClick={handleLogin}>Sing IN</button>

          <a href="/" style={{marginLeft:"8px"}}>   <button  class="btn btn-info"   > Home</button></a>
       
        </div>
        {/* <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        /> */}

      </div>
    </div>
  )
}
