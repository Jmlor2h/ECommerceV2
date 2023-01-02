import React from "react";
import {Link} from 'react-router-dom';


const Navbar = () => {
       return (
      <header>
            <nav class="navbar navbar-dark bg-light fixed-top">
  <div class="container-fluid">
    <strong><Link class="navbar-brand text-dark" to='/'>"Raging-Ape"</Link></strong>
    <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLightNavbar" aria-controls="offcanvasLightNavbar">
      <span class="navbar-toggler-icon bg-dark"></span>
    </button>
    <div class="offcanvas offcanvas-end bg-light text-bg-dark" tabindex="-1" id="offcanvasLightNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasLightNavbarLabel"><strong><Link class="text-dark" to='/'>"Raging-Ape"</Link></strong></h5>
        <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body bg-light">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
          <Link class='nav-link aria-current="page text-dark' to='/'>Home</Link>
          </li>
          <li class="nav-item">
          <Link class='nav-link aria-current="page text-dark' to='/products'>Products</Link>
          </li>
          <li class="nav-item">
          <Link class='nav-link aria-current="page text-dark' to='/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </header>
    ) 
}

export default Navbar;