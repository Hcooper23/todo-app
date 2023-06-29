import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Auth';

function Auth({ capability, children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return null; // Hide the entire interface until the user has logged in
  }

  const { permissions } = user;

  if (!permissions || !permissions.includes(capability)) {
    return null; // User doesn't have the required capability, hide the components
  }

  return <>{children}</>; // Render the children components if the user has the capability
}

export default Auth;
