import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader,setLoader]=useState(true);
  // create an user
  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signinwith email and password
  const signInUser = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // load the current logged in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false)
      // console.log(currentUser);
    });
    return () => unsubscribe();
  }, []);

  //   signout method
  const logOut = () => {
    setLoader(true)
    signOut(auth).then(console.log("logged out successfully"));
  };

  const authInfo = {
    createUser,
    signInUser,
    user,
    logOut,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
