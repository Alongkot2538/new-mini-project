
import React, { useState } from 'react';
import auth from '../firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from 'firebase'
import Admin from './Admin'
export default function Userlogin({ setSession }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
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
            onClick={handleLogin}>Submit</button>
          <button style={{ marginLeft: "8px" }}
            class="btn btn-info" onClick={handleRegister}> Register</button>
        </div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />

      </div>
    </div>
  )
}
