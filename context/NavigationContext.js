import React, { createContext, useState } from 'react';

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <NavigationContext.Provider value={{ name, setName, phone, setPhone }}>
      {children}
    </NavigationContext.Provider>
  );
};
