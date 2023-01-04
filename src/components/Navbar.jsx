import React from "react";
import {Link} from 'react-router-dom';
import { useState } from "react";


const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false) // state will be used to tell if navbar is expanded or not.

    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
          "RAGING-APE"
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded) // isNavExpanded is set to false by default, so this will set it to the opposite which is true
          }}
        >
<svg viewBox="0 0 100 80" width="40" height="40">
  <rect width="100" height="20"></rect>
  <rect y="30" width="100" height="20"></rect>
  <rect y="60" width="100" height="20"></rect>
</svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu" // depending on what it is set to true/false, will determine the class name.
          }
        >
          <ul>
            <li>
            <Link onClick={() => {
            setIsNavExpanded(false)
          }} class='navl' to='/'>Home</Link>
            </li>
            <li>
            <Link onClick={() => {
            setIsNavExpanded(false)
          }} class='navl' to='/products'>Products</Link>
            </li>
            <li>
            <Link onClick={() => {
            setIsNavExpanded(false)
          }} class='navl' to='/contact'>Contact</Link>
            </li>
            <li class="navdescli"><p class="navdescmobile">We're glad you're here!</p>
          <p class="navdescmobile">Located at 227 W College St, Charlotte NC <br/> Come see us in person for exclusives and more deals! <br/> We can be reached at 704-983-2617 by phone or at Support@Ragingape.com by email! </p></li>
          </ul>
        </div>
      </nav>
    );

    //    return (
    //   <header>
    //     <nav>
    //     <div class="navbar" id="topnavbar">
    //       <strong><Link class='logo' to='/'>"Raging-Ape"</Link></strong>
    //       <Link class='navl' to='/'>Home</Link>
    //       <Link class='navl' to='/products'>Products</Link>
    //       <Link class='navl' to='/contact'>Contact</Link>
    //       <a class="shopcart"><i class="fa fa-shopping-cart icon-4x"></i></a>
    //       <a href="javascript:void(0);" class="icon" onclick={myFunction}> 
    //         <i class="fa fa-bars"></i>
    //       </a>
    //     </div>
    //     </nav>
    // </header>
}

export default Navbar;