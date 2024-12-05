import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState({role: "admin",username: "Abhi"});
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    toast("Logged In Successfully")
  };
  const logout = () =>{
    setUser(null);
    toast("Logged Out Successfully")
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
