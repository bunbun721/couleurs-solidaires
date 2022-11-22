import "./App.css";

// routes
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InfoPratiques from "./pages/InfoPratiques";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informations-pratiques" element={<InfoPratiques />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
