import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Stores from "./pages/Stores";
import SKUs from "./pages/SKUs";
import Planning from "./pages/Planning";
import ChartPage from "./pages/ChartPage";
import logo from "./assets/logo.svg"; 
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="top-nav black-theme">
          <img src={logo} alt="Company Logo" className="logo" />
        </header>
        <div className="main-layout">
          <nav className="sidebar black-theme">
            <ul>
              <li><Link to="/stores">Stores</Link></li>
              <li><Link to="/skus">SKUs</Link></li>
              <li><Link to="/planning">Planning</Link></li>
              <li><Link to="/chart">Chart</Link></li>
            </ul>
          </nav>
          <main className="content black-theme">
            <Routes>
              <Route path="/stores" element={<Stores />} />
              <Route path="/skus" element={<SKUs />} />
              <Route path="/planning" element={<Planning />} />
              <Route path="/chart" element={<ChartPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
