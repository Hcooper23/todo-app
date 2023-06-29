import React, { useState, useEffect } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {
  const [displayCount, setDisplayCount] = useState(3);
  const [showComplete, setShowComplete] = useState(false);
  const [sort, setSort] = useState('difficulty');

  useEffect(() => {
    const savedSettings = localStorage.getItem('settings');
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setDisplayCount(parsedSettings.displayCount);
      setShowComplete(parsedSettings.showComplete);
      setSort(parsedSettings.sort);
    }
  }, []);

  const saveSettingsToLocalStorage = () => {
    const settings = {
      displayCount,
      showComplete,
      sort,
    };
    localStorage.setItem('settings', JSON.stringify(settings));
  };

  const values = {
    displayCount,
    setDisplayCount,
    showComplete,
    setShowComplete,
    sort,
    setSort,
    saveSettingsToLocalStorage,
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
