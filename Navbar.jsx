import { yellow } from '@mui/material/colors';
import React from 'react';
import {NavLink} from "react-router-dom";
const Navbar=()=>{
    return(
        <>

        {/* <NavLink exact activeClassName="active_class" to='/'>About</NavLink>

        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/search'>Search</NavLink>
        <NavLink to='/user/garima'>User</NavLink>
        */}
        <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <NavLink activeClassName="menu_active"   class="navbar-brand" to="/">Devlopment</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li  class="nav-item">
          <NavLink   activeClassName="menu_active" class="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeClassName="menu_active"  class="nav-link active" aria-current="page" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeClassName="menu_active" class="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeClassName="menu_active" class="nav-link active" aria-current="page" to="/services">Services</NavLink>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>

</div>

</div>

</div>
</>
    )
}

export default Navbar;