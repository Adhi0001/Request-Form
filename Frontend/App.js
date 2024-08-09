import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginform from "./components/Loginform";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard"
import Mywork from "./components/MyWork/Mywork";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginform />} />
          <Route path="/login" element={<Loginform />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myworks" element={<Mywork/>} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
