import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppPrivider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
