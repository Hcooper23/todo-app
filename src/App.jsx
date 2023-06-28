import React from 'react';
import { SettingsProvider } from './Context/Settings';
import Todo from './Components/Todo';

const App = () => {
  return (
    <SettingsProvider>
      <Todo />
    </SettingsProvider>
  );
};

export default App;
