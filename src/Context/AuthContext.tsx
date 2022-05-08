import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Config/firebaseConfig";

type AuthContextType = {
  token: string;
  setToken: (arg0: string) => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const uId = JSON.parse(localStorage.getItem("uid") || "{}") || null;
  const [token, setToken] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        user?.uid && localStorage.setItem("uid", JSON.stringify(user?.uid));
        setToken(user?.uid);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
