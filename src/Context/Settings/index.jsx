import React, { useEffect, useState } from "react";
export const SettingsContext = React.createContext();
function SettingsProvider({ children }) {
  const [showComplete, setShowComplete] = useState(false);
  const [displayItems, setDisplayItems] = useState(3);
  const [sort, setSort] = useState("difficulty");

  const saveLocally = () => {
    localStorage.setItem(
      "todo",
      JSON.stringify({ displayItems, showComplete, sort })
    );
  };

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem("todo"));
    if (storage) {
      setDisplayItems(storage.displayItems);
      setShowComplete(storage.showCompleted);
      setSort(storage.sort);
    }
  }, []);

  const values = {
    showComplete,
    displayItems,
    sort,
    setShowComplete,
    setDisplayItems,
    setSort,
    saveLocally
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
