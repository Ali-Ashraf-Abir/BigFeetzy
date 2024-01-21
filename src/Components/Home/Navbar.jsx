import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../ContextApi/ContextApi';
import { getAuth, signOut } from "firebase/auth";
import auth from '../Firebase/firebase';

const Navbar=()=> {

  const {user,setUser}=useContext(Authcontext)


  const SignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser(null)
      alert("succesfully Logged Out")
    }).catch((error) => {
      // An error happened.
    });
  }

        return (
            <div className="navbar bg-[rgb(0,0,0,0.3)] text-white font-nunito font-semi-bold absolute px-4">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-ghost rounded-box w-52">
                <Link to="/"><li><a>Home</a></li></Link>

                <Link to="product"><li><a>Shoes</a></li></Link>

                <li><a>About Us</a></li>
                <li><a>Contact Us</a></li>
                {user?.email=="admin@gmail.com"?<Link to="addproduct"><li><a>AddProduct</a></li></Link>:""}
                {user?.email=="admin@gmail.com"?<Link to="orders"><li><a>Orders</a></li></Link>:""}
                </ul>
              </div>
              <img className='h-[8vh] w-[8vh] rounded-[50%]' src="logo.jpg" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-[2.5vh]">
                <Link to="/"><li className='hover:bg-[rgb(255,255,255,0.3)] rounded-lg'><a>Home</a></li></Link>

               <Link to="product"> <li className='hover:bg-[rgb(255,255,255,0.3)] rounded-lg'><a>Shoes</a></li></Link>

                <li className='hover:bg-[rgb(255,255,255,0.3)] rounded-lg'><a>About Us</a></li>
                <li className='hover:bg-[rgb(255,255,255,0.3)] rounded-lg'><a>Contact Us</a></li>
                {user?.email=="admin@gmail.com"?<Link to="addproduct"><li><a>AddProduct</a></li></Link>:""}
                {user?.email=="admin@gmail.com"?<Link to="orders"><li><a>Orders</a></li></Link>:""}
              </ul>
            </div>
            <div className="navbar-end">
             {user?<div><span className='mr-[2vh] font-nunito text-white font-bold'>{user.displayName}</span><button onClick={SignOut} className='btn'>Logout</button></div>:<Link to="login"><a className="btn">Login</a></Link>}
            </div>
          </div>
        );
    
}

export default Navbar;