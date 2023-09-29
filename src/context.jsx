import { useContext, createContext, useState, useReducer } from "react";
import reducer from "./reducers/reducer";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {}; //Can be anything
  const [state, dispatch] = useReducer(reducer, initialState);

  const [isDarkMode, setIsDarkMode] = useState(false); //Example

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
