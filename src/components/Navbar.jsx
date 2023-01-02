import React from "react";
import {Link} from 'react-router-dom';
import { useState } from "react";


const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
          "RAGING-APE"
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
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
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
            <Link onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }} class='navl' to='/'>Home</Link>
            </li>
            <li>
            <Link onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }} class='navl' to='/products'>Products</Link>
            </li>
            <li>
            <Link onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }} class='navl' to='/contact'>Contact</Link>
            </li>
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