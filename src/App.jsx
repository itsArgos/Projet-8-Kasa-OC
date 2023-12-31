import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Error } from "./pages/Error/Error";
import { Apartment } from "./pages/Apartment/Apartment";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartment/:apartmentId" element={<Apartment />} />
          {/* path='*' fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
