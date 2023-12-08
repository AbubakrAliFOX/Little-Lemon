import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  // localStorage.clear();
  const userData = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : null;
  console.log('From auth', userData);
  const [auth, setAuth] = useState(userData);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContext;