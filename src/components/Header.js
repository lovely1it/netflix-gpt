import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constant";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>unsubscribe();
  }, []);
 const handleSignOut=()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    navigate("/error");
  });
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-gray-800 z-10 w-screen flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
     { user && (<div className="flex">
        <img className="w-20 h-20 p-4" src={user?.photoURL} alt="photo-profile"/>
      <button onClick={handleSignOut} className=" text-white font-bold cursor-pointer">(Sign Out)</button>
      </div>)}
    </div>
  );
};

export default Header;
