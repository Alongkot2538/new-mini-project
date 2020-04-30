import React from 'react'

const Navbar =()=>{
    return(
        <div>
       <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  
  <a class="navbar-brand" href="/Home">Home</a>

 
  <ul class="navbar-nav">
   
    <li class="nav-item">
      <a class="nav-link" href="/Sell">Sell</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/User">Profile</a>
    </li>
   
  </ul>
</nav>
    </div>
    )
    
}
export default Navbar;