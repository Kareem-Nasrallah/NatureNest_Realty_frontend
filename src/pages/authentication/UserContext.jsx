import { createContext, useState } from "react";

export const User = createContext({});

const SharContext = ({ children }) => {
  const [value, setValue] = useState({ token: null, userData: null });
  return <User.Provider value={{ value, setValue }}>{children}</User.Provider>;
};

export default SharContext;
