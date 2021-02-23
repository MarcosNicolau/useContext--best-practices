import React, { useState, useContext } from 'react';
const DarkThemeContext = React.createContext();

export const useDarkThemeContext = () => useContext(DarkThemeContext);

const DarkThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);
  const toggleTheme = () => setTheme(prev => !prev);

  return(
    <DarkThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </DarkThemeContext.Provider>      
  );
}

export default DarkThemeProvider;