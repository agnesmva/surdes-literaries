import React, { createContext, useContext, useState } from 'react';

const ColorblindContext = createContext();

export const ColorblindProvider = ({ children }) => {
  const [isColorblindMode, setIsColorblindMode] = useState(false);

  const toggleColorblindMode = () => {
    setIsColorblindMode((prev) => !prev);
  };

  return (
    <ColorblindContext.Provider value={{ isColorblindMode, toggleColorblindMode }}>
      {children}
    </ColorblindContext.Provider>
  );
};

export const useColorblind = () => {
  const context = useContext(ColorblindContext);
  if (!context) {
    throw new Error('useColorblind must be used within a ColorblindProvider');
  }
  return context;
};