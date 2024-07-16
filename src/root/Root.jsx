import App from "./App";
import Navbar from "../components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToggleProvider } from "../context/NavContext";

const Root = () => {
  return (
    <ToggleProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToggleProvider>
  );
};

export default Root;
