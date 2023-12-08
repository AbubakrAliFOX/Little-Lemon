import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem('Testy'));
  console.log('From auth', userData);
  const [auth, setAuth] = useState(userData);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContext;