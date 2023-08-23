import React, { useState } from 'react';

import { Link } from 'gatsby';

import logo from "../images/logo.svg"


function Header() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const handleMenuToggle = () => {
    setIsMenuHidden(!isMenuHidden);
  };

  return (

    <header className="bg-white py-7 fixed top-0 w-full z-10">
        <nav className="container px-4 mx-auto">
            <div className="flex justify-between">
                <div className="flex space-x-7">
                    <div>
                        <Link to=""><img className="h-11" src={logo} alt="" /></Link>
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                    <Link to="" className="py-2 px-4 font-light text-xl">QuibbleLite for Small Operators</Link>
                    <Link to="" className="py-2 px-4 font-light text-xl">Privacy Policy</Link>
                    <Link to="" className="py-2 px-4 font-medium text-xl text-white bg-[#D79E34] rounded">Login</Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button className="mobile-menu-button" onClick={handleMenuToggle}>
                        <svg className=" w-6 h-6"
                            x-show="!showMenu"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={` md:hidden mobile-menu h-full mobile-menu ${isMenuHidden ? 'hidden' : ''}`}>
                <div className="flex flex-col align-baseline items-start py-4 gap-4">
                    <a to="" className="py-2 font-light text-xl">QuibbleLite for Small Operators</a>
                    <a to="" className="py-2 font-light text-xl">Privacy Policy</a>
                    <a to="" className="py-2 px-4 font-medium text-2xl text-white bg-[#D79E34] rounded">Login</a>    
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;