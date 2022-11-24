import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile)
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('user Observing', currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  
  const authInfo = {
    user,
    loading,
    createUser,
    googleLogin,
    updateUser,
    signIn,
    logOut,
  };
  
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;