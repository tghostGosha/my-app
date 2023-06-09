import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OurTeamPage } from "./pages/OurTeamPage";
import { MainPage } from "./pages/MainPage";
import { PartnerPage } from "./pages/PartnerPage";
import "./styles/styles.css";

function App() {
  return (
    // <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ourTeam" element={<OurTeamPage />} />
          <Route path="/ourTeam/PartnerPage/:id" element={<PartnerPage />} />
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
