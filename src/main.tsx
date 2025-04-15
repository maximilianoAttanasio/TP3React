import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listado from "./components/Listado.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/listado" element={<Listado />} />
        <Route path="/app" element={<App />} />
        <Route path="*" element={<Listado />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
