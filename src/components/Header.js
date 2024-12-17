import React from "react";
import Dropdown from "./Dropdown";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { adduser, removeuser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { netflixLogo } from "../utils/constants";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, password } = user;
        dispatch(adduser({ uid: uid, email: email, password: password }));
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeuser());
        navigate("/");
      }
    });
    return ()=>unsubscribe();
  }, []);

  return (
    <div className="px-8 py-2 w-full bg-gradient-to-b from-black absolute z-10 flex justify-between">
      <img
        class="p-2 m-2 w-52 "
        src={netflixLogo}
        alt="Netflix Logo"
      />

      <Dropdown />
    </div>
  );
};

export default Header;
