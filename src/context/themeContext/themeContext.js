import {createContext} from 'react';

const themeContext = createContext({
    isDarkTheme: false,
    toggleDarkTheme: () => {},
    backgroundColor: "",
    primaryTextColor: ""
})