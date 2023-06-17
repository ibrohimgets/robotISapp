import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedAuth = localStorage.getItem("isLoggedIn");
    return storedAuth !== null ? JSON.parse(storedAuth) : false;
  });

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return [isLoggedIn, login, logout];
};

const AuthProvider = ({ children }) => {
  const [isLoggedIn, login, logout] = useAuth();

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
