import React, { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="bg-transparent">
      <nav className="flex items-center justify-between flex-wrap bg-transparent p-6">
        <ul className="flex items-center flex-shrink-0 text-white mr-6">
          <li className="mr-6">
            <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
              <span className="text-2xl pl-2"><i className="em em-grinning"></i> Oak & Cherry</span>
            </a>
          </li>
        </ul>
        <div className="block lg:hidden">
          <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white" onClick={toggleNav}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-transparent z-20 ${isNavOpen ? '' : 'hidden'}`} id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
            </li>
          </ul>
          <button id="navAction" className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-semibold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Action
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
