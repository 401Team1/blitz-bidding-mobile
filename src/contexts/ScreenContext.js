import React, { useState, createContext, useContext } from 'react';

const ScreenContext = createContext();

export const useScreen = () => useContext(ScreenContext);

export const ScreenProvider = ({ children }) => {

  const [currentScreen, setCurrentScreen] = useState('Login');
  const navigate = (screenName) => {
    setCurrentScreen(screenName);
  };
  
  return (
    <ScreenContext.Provider value={{ currentScreen, navigate }}>
      {children}
    </ScreenContext.Provider>);
}; 