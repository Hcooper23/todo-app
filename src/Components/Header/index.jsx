import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Auth';

function Header() {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Header;
