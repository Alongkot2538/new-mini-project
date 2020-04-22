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