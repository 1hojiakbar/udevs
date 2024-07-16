import { createContext, useState } from "react";

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const toggleValue = ({ param }) => {
    if (param) {
      setToggle(param);
    } else {
      setToggle((prevToggle) => !prevToggle);
    }
  };

  return (
    <ToggleContext.Provider value={{ toggle, toggleValue }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContext;
