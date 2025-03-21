import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
        <div className="hero min-h-screen bg-sky-100">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left  lg:w-1/3">
      <h1 className="text-5xl font-bold">Join Now!</h1>
      <p className="py-6">
      Covering hundreds of destinations and countless experiences, Lonely Planet is your guide for traveling better and smarter.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-xl shrink-0 ">
    <div className="w-full  p-8 space-y-3 rounded-xl  ">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form noValidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="Name" className="block text-gray-400">
            Enter Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="your name"
              className="w-full px-4 py-3 rounded-md border-gray-700 border"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="Email" className="block text-gray-400">
             Your Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="name@gmail.com"
              className="w-full px-4 py-3 rounded-md border-gray-700 border"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 border "
            />
           
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="PhotoUrl" className="block text-gray-400">
              Enter a Phot Url
            </label>
            <input
              type="text"
              name="photoUrl"
              id="photUrl"
              placeholder="Photo Url"
              className="w-full px-4 py-3 rounded-md border-gray-700 border "
            />
           
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-blue-300">
            Sign Up
          </button>
        </form>
       
        <p className="text-xs text-center sm:px-6 ">
          Already have an account?
          <Link className="underline  text-blue-400" to="/login">Sign In
          </Link>
        </p>
      </div>
    </div>
  </div>
</div>
      
     
    </div>
    );
};

export default Register;