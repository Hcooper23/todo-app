import React, { useContext } from 'react';

import Todo from './Components/Todo/index';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
import SettingsForm from './Components/SettingsForm/index';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { When } from 'react-if';
import { AuthContext } from './Context/Auth/index';

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Header />
        <When condition={isLoggedIn}>
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/settings" element={<SettingsForm />} />
          </Routes>
        </When>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;