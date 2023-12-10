import React from 'react';
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <section className="siteName"><h1><Link to = "/">TechPoint</Link></h1></section>
      <section><input className='search' type="text" placeholder="Search"></input></section>
      <section className="navList">
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/Login">Login</Link></li>
          <li><Link to = "/MyAccount">MyAccount</Link></li>
          <li><Link to = "/MyCart">MyCart</Link></li>
          <li><Link to = "/ContactUs">ContactUs</Link></li>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;