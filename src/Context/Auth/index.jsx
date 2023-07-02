import React, { useEffect, useState } from 'react';
import testUsers from './lib/users';
import jwt_decode from 'jwt-decode';
import cookie from 'react-cookies';

export const AuthContext = React.createContext();

// Provider for Auth state
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    let cookieToken = cookie.load('auth');
    _validateToken(cookieToken);
  }, []);

  const _validateToken = (token) => {
    try {
      let validUser = jwt_decode(token);
      console.log(validUser);
      if (validUser) {
        console.log(validUser);
        cookie.save('auth', token);
        setUser(validUser);
        setIsLoggedIn(true);
        console.log('user logged in');
      }
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const login = (username, password) => {
    let user = testUsers[username];
    if (user && user.password === password) {
      try {
        _validateToken(user.token);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    }
  };

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    cookie.remove('auth');
  };

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  };

  const values = {
    isLoggedIn,
    user,
    error,
    login,
    logout,
    can,
  };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
