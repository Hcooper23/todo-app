import React, { createContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = (username, password) => {
    // Simulate login logic here
    // You can replace this with your actual login implementation
    setUser({ username, password });
    setLoggedIn(true);
  };

  const logout = () => {
    // Simulate logout logic here
    setUser(null);
    setLoggedIn(false);
  };

  const authorize = (capability) => {
    // Simulate authorization logic here
    // You can implement your own logic to check if the user has the capability
    if (user && user.capabilities && user.capabilities.includes(capability)) {
      return true;
    }
    return false;
  };

  const authContextValue = {
    user,
    isLoggedIn,
    login,
    logout,
    authorize,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
