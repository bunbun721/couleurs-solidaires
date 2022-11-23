import "./App.css";

// routes
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InfoPratiques from "./pages/InfoPratiques";
import CouleursSolidaires from "./pages/CouleursSolidaires";
import Charte from "./pages/Charte";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informations-pratiques" element={<InfoPratiques />} />
          <Route path="/couleurs-solidaires" element={<CouleursSolidaires />} />
          <Route path="/charte" element={<Charte />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
