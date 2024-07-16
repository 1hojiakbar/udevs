import React, { createContext, useContext, useState, useEffect } from "react";

const BreakpointContext = createContext();

export const BreakpointProvider = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let currentBreakpoint = null;

      if (width >= 1400) currentBreakpoint = "1400px";
      else if (width >= 1200) currentBreakpoint = "1200px";
      else if (width >= 992) currentBreakpoint = "992px";
      else if (width >= 800) currentBreakpoint = "800px";
      else if (width >= 768) currentBreakpoint = "768px";
      else if (width >= 567) currentBreakpoint = "567px";
      else if (width >= 375) currentBreakpoint = "375px";

      setBreakpoint(currentBreakpoint);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BreakpointContext.Provider value={breakpoint}>
      {children}
    </BreakpointContext.Provider>
  );
};

export const useBreakpoint = () => useContext(BreakpointContext);
