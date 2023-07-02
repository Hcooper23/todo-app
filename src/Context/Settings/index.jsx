import React, { useEffect, useState } from "react";
export const SettingsContext = React.createContext();
function SettingsProvider({ children }) {
  const [showCompleted, setShowCompleted] = useState(false);
  const [displayItems, setDisplayItems] = useState(3);
  const [sort, setSort] = useState("difficulty");

  const storeLocal = () => {
    localStorage.setItem(
      "todo",
      JSON.stringify({ displayItems, showCompleted, sort })
    );
  };

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem("todo"));
    if (storage) {
      setDisplayItems(storage.displayItems);
      setShowCompleted(storage.showCompleted);
      setSort(storage.sort);
    }
  }, []);

  const values = {
    showCompleted,
    displayItems,
    sort,
    setShowCompleted,
    setDisplayItems,
    setSort,
    storeLocal
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
