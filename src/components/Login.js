import React, { useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import { useRef } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
import { netflixBackGround } from "../utils/constants";
const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [validateMessage, setValidateMessage] = useState(null);

  function changeSignIn() {
    setSignIn(!isSignIn);
  }

  // useRef hook is use to reference the field/input box or anything , can use useState also
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    // Validate the form data
    const data = checkValidateData(email.current.value, password.current.value);
    setValidateMessage(data);

    if (data) return null;

    if (!isSignIn) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidateMessage(errorCode + " " + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidateMessage("Please check email or password");
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src={netflixBackGround}
          alt="background"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className=" font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn ? (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
        ) : null}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <p className="text-red-700"> {validateMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg "
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <h3>
          {isSignIn ? "New to Netflix ? " : "Already a user ? "}
          <b
            className="hover:underline hover:cursor-pointer"
            onClick={changeSignIn}
          >
            {isSignIn ? "Sign up now" : "Sign in now"}
          </b>
        </h3>
      </form>
    </div>
  );
};
export default Login;
