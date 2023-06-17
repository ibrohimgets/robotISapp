import { createContext, useEffect, useState } from "react";

// Create a context for the user authentication status
const AuthContext = createContext();

// Custom hook to access and update user authentication status
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

// Component that provides user authentication status through context
const AuthProvider = ({ children }) => {
  const [isLoggedIn, login, logout] = useAuth();

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
