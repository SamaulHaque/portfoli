import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/' className='font-semibold mr-3'>HOME</Link></li>
        <li><Link to='/about-me' className='font-semibold mr-3'>ABOUT ME</Link></li>
        <li><Link to='/contact-me' className='font-semibold mr-3'>CONTACT ME</Link></li>
        <li><Link to='/blog' className='font-semibold'>BLOG</Link></li>
      </ul>
    </div>
    <Link to='/' className=""><img src={logo} alt="" className='w-20 rounded' /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/' className='font-semibold mr-3'>HOME</Link></li>
        <li><Link to='/about-me' className='font-semibold mr-3'>ABOUT ME</Link></li>
        <li><Link to='/contact-me' className='font-semibold mr-3'>CONTACT ME</Link></li>
        <li><Link to='/blog' className='font-semibold'>BLOG</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;