import { React, createContext } from "react";

const context = createContext();

function authProvider({ children }) {
  const user = {
    login: true,
  };
  return <context.Provider value={user}>{children}</context.Provider>;
}
