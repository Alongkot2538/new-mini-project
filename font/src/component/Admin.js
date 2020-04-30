import React, { useState, useEffect } from 'react';
import Login from './Login'
import auth from '../firebase';
import Navbar from './Navbar'
import Books from './Books'
import Update from './Update';
import Navadmin from './์Navadmin';

export default function Admin() {
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
          {/* <Navbar/> */}
       {session.isLoggedIn ? (
         //กรณี log in สำเร็จ
        <div>
            <Navadmin></Navadmin>
          <div className="App">
            <h1>Welcome : admin {session.currentUser && session.currentUser.displayName}</h1>
            {session.currentUser && session.currentUser.email}
            <br/><br/>
            <img
               width="180px" height="150px"
              src={session.currentUser && session.currentUser.photoURL}
            />
            <br/><br/>
            <button  
               class="btn btn-primary mb-2"
                onClick={handleLogout}>logout</button>
          </div>
          
            
          
          {/* <Books/> */}
          {/* <Update/> */}


          
        </div>

      ) : (
         //กรณีไม่ได้ login เข้าระบบ
          <div>
          <Login setSession={setSession} />
         
           
           </div>
        )}
    </div>
  )
}
