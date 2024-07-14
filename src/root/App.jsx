import React from "react";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Team from "../pages/Team/Team";
import Mobile from "../pages/Mobile/Mobile";
import Systems from "../pages/ERPSystems/Systems";
import UI from "../pages/UI/UI";
import Optimization from "../pages/Optimization/Optimization";
import Consulting from "../pages/Consulting/Consulting";

const App = () => {
  return (
    <>
      <Home />
      <Services />
      <Team />
      <Mobile />
      <Systems />
      <UI />
      <Optimization />
      <Consulting />
    </>
  );
};

export default App;
