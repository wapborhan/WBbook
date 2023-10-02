import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebaseInt";

export const AuthContex = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    // console.log(email, password);
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    // console.log(email, password);
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // console.log(currentUser);
    });

    return () => unSubcribe();
  }, []);

  const AuthInfo = {
    user,
    loading,
    createUser,
    signinUser,
    signinWithGoogle,
    logOut,
  };

  // console.log(user);
  return <AuthContex.Provider value={AuthInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
