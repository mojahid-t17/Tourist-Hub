import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
const Register = () => {
   // display password or not
   const [showPassword,setShowpassord]=useState(false);
   const navigate=useNavigate();

  const [regerror, setRegError]=useState('');
  const {createUser}=useContext(AuthContext)
  const handleSignup=e=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    // const user={name,email,password,photoUrl}
    // console.log(user)
    

    // Password Validation
    if (password.length < 6) {
      setRegError("Password should be at least 6 characters.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError("Password should contain at least one uppercase letter.");
      return;
    } else if (!/[@$!%*?&]/.test(password)) {
      setRegError("Password should contain at least one special character (@, $, !, %, *, ?, &).");
      return;
    }

    setRegError("");

      createUser(email,password)
      .then(res=>{
        // console.log(res)
        updateProfile(res.user,{
          displayName: name,
          photoURL: photoUrl,
        })
        Swal.fire({
          title: "Success!",
          text: "You are register successfully!",
          icon: "success"
        });
         form.reset();
         navigate('/')
      })
      .catch(err=>{
        if(err.message=='Firebase: Error (auth/email-already-in-use).')
        setRegError('User already exist');
       else{
        setRegError('Something Wrong. please try again later. ')
       }
        console.log(err)})

  }
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
        <form onSubmit={handleSignup} className="space-y-6">
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
            required
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
            <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        id="password"
        placeholder="Password"
        className="w-full px-4 py-3 pr-12 rounded-md border border-gray-700 focus:ring-2 focus:ring-blue-500"
      />
      {/* Eye Icon */}
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
        onClick={() => setShowpassord(!showPassword)}
      >
        {showPassword ? <FaEyeSlash size={20} />  :<FaRegEye size={20} /> }
      </div>
    </div>

            {regerror && <p style={{ color: "red" }}>{regerror}</p>}
            <p className='text-gray-400'>Password should be at least:</p>
            <ul className='list-disc text-gray-400 ms-4'>
            <li className='item'>6 Characters</li>
            <li>one ulipercase letter</li>
            <li>one special character (@, $, !, %, *, ?, &).</li>
            </ul>
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
          <input type="submit"  className="block w-full p-3 text-center rounded-sm text-gray-900 bg-blue-300" value="Sign Up" />
         
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