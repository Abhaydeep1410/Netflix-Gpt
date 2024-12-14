import React, { useState } from "react";
import Header from "./Header";
const Login = () => {

  const [isSignIn,setSignIn]=useState(true);
  function changeSignIn(){
    setSignIn(!isSignIn);
  }
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_medium.jpg
"
          alt="background"
        />
      </div>
      
          <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className=" font-bold text-3xl py-4">{isSignIn ? "Sign In":"Sign Up"}</h1>
            { !isSignIn?
            <input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700"></input>:
              null
            }
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"></input>
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"></input>

            <button className="p-4 my-4 bg-red-700 w-full rounded-lg "> {isSignIn ? "Sign In":"Sign Up"}</button>
            <h3>  {isSignIn?"New to Netflix ? ":"Already a user ? "}
                <text className="hover:underline hover:cursor-pointer"  onClick={changeSignIn}>
                  {isSignIn?"Sign up now":"Sign in now"}
                  </text></h3>
          </form>
      
    </div>
  );
};
export default Login;
