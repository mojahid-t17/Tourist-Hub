import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const link = (
    <>
      <li>
        <Link  className="font-bold" to="/home">
         Home
        </Link>
        
      </li>
      <li>
        <a className="font-bold">Tourists Spots</a>
      </li>
      <li>
        <a className="font-bold">Add Tourist Spot</a>
      </li>
      <li>
        <a className="font-bold">My List</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm mx-auto b">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>

        <Link className=" text-blue-400 font-bold text-2xl font-Lobster ms-8">
          Tourist Hub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end ">
        <div className="dropdown dropdown-end space-x-4">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
         
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <Link className="btn " to="/register">Register</Link>
        <Link className="btn btn-outline btn-info" to="/login">LogIn</Link>
      </div>
     
    </div>
  );
};

export default Navbar;
