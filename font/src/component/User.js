import React, { useState, useEffect } from 'react';
import Login from './Login'
import auth from '../firebase';
import Navbar from './Navbar'
import Books from './Books'
import Userlogin from './Userlogin'
// import Formuser from './Formuser';

export default function User() {
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
         //กรณี log in สำเร็จ
        <div className="App">
          <Navbar/>
          <div>
            <h1>Welcome  {session.currentUser && session.currentUser.displayName}</h1>
            {session.currentUser && session.currentUser.email}
            <br/>
            <img
               width="180px" height="150px"
              src={session.currentUser && session.currentUser.photoURL}
            />
            <br/><br/>
            <button  
               class="btn btn-primary mb-2"
                onClick={handleLogout}>logout</button>
          </div>
          
            
          
          {/* <Formuser/> */}
        </div>

      ) : (
         //กรณีไม่ได้ login เข้าระบบ
          <div>
          <Userlogin setSession={setSession} />
        
           
           </div>
        )}
    </div>
  )
}
