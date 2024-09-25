import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase";
import { UserData } from "../types";

interface IAuthContext {
  authenticated: boolean
  setAuthenticated: (newState: boolean) => void
}

const initalValues = {
  authenticated: false,
  setAuthenticated: () => {}
}

const AuthContext = createContext<IAuthContext>(initalValues);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const createUser = (userData: UserData) => {
    setLoading(true);
    return createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
  };

  const loginUser = (userData: UserData) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, userData.email, userData.password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{authenticated, setAuthenticated}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
