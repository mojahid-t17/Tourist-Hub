import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
 
  const {user,logOut}=useContext(AuthContext);

  const [email, setEmail] = useState(null);

  // Update email when user is available
  useEffect(() => {
    if (user) {
      setEmail(user.email);
    }
  }, [user]); 

 const handleSignOut=()=>{
   logOut()
   .then(() => {
    console.log("Logged out successfully");
   
  })
   .catch(err=>console.log(err))
 }
//  console.log(email)
  const link = (
    <>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-[#706F6F]')}  to="/">
         Home
        </NavLink>
        
      </li>
      <li>
        <NavLink  to='/allTouristSpots/All'  className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-[#706F6F]')}>Tourists Spots</NavLink>
      </li>
      <li>
        <NavLink to="/addTouristSpot"  className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-[#706F6F]')}>Add Tourist Spot</NavLink>
      </li>
      <li>
        <NavLink to={`/myList/${email}`}  className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-[#706F6F]')}>My List</NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed top-0 z-50  navbar bg-base-100 shadow-sm mx-auto b">
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

        <Link to="/" className=" text-blue-400 font-bold text-2xl font-Lobster ms-8">
          Tourist Hub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end ">
         {
          user?  <div className="dropdown dropdown-end space-x-4">
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
              <a className="justify-between text-blue-400 uppercase font-bold">
                {
                  user?.displayName ?? 'user'
                }
               
              </a>
            </li>
             <hr />
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link onClick={handleSignOut}>Logout</Link>
            </li>
          </ul>
        </div>: <div><Link className="btn " to="/register">Register</Link>
        <Link className="btn btn-outline btn-info ms-3" to="/login">LogIn</Link></div>
         }
        
      </div>
     
    </div>
  );
};

export default Navbar;
