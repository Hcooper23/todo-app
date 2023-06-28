import React from 'react';

const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  // Set default values for settings
  const settings = {
    displayCount: 3,
    hideCompleted: true,
    sortWord: 'difficulty',
  };

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
