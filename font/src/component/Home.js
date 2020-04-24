// import React, { useState,useEffect } from 'react'
// import Navbar from './Navbar'
// import Book from './Books'
// import Login from './Login'
// import auth from './firebase/auth'

// const Home = () => {const [session, setSession] = useState({
//     isLoggedIn: false,
//     currentUser: null,
//     errorMessage: null
//   });

//   useEffect(() => {
//     const handleAuth = auth.onAuthStateChanged(user => {
//       if (user) {
//         setSession({
//           isLoggedIn: true,
//           currentUser: user,
//           errorMessage: null
//         });
//       }
//     });

//     return () => {
//       handleAuth();
//     };
//   }, []);

//   const handleLogout = () => {
//     auth.signOut().then(response => {
//       setSession({
//         isLoggedIn: false,
//         currentUser: null
//       });
//     });
//   };


//     return (
//         <div>
//             {session.isLoggedIn ? (<Navbar />):(<Login setSession={setSession}/>)}

//             {/* <Book /> */}
//         </div>
//     )
// }
// export default Home;


import React, { useState, useEffect } from 'react';
import Login from './Login'
import auth from '../firebase';
import Navbar from './Navbar'

export default function Home() {

    return (
        <div>
            <div class="row">
                <div class="col-sm-8">
                    <img src="https://www.wegointer.com/wp-content/uploads/2017/10/books1.jpg" width="100%" height="738" />
                </div>
                <div class="col-sm-4">


                    <div class="body">
                        <div class="form-signin">


                            <h2 class="form-signin-heading">Please Login</h2>
                            {/* <p1>{username} {password}</p1> */}



                            <a href="/User"><button class="btn btn-lg btn-primary btn-block"> Login</button></a>
                            <br />
                            <a href="/Admin"><button class="btn btn-lg btn-primary btn-block"> Admin</button></a>
                            {/* <div style={{textAlign:"center"}}> <a href="/">Home</a></div> */}
                        </div>
                    </div>






                </div>


            </div>
        </div>
    )
}
