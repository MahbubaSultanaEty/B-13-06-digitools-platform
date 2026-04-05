import React from 'react';
import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({cart}) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
        <li><a href='#products'>Products</a></li>
        <li><a href='#features'>Features</a></li>
        <li><a href='#pricing'>Pricing</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
         <li><a href='#faq'>FAQ</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><a href='#products'>Products</a></li>
        <li><a href='#features'>Features</a></li>
        <li><a href='#pricing'>Pricing</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
         <li><a href='#faq'>FAQ</a></li>
    </ul>
  </div>
                <div className="navbar-end items-center">
                   
                    {/* cart icon */}
                    <div className="indicator">
              <span className="indicator-item badge badge-primary text-xs px-1 py-0">{ cart.length}</span>
  <FaCartShopping className='text-xl' />
</div>

                <button className='btn btn-ghost'>login</button>
                        <a className="btn bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full text-white">Get Started</a>
                       
  </div>
</div>
        </div>
    );
};

export default Navbar;