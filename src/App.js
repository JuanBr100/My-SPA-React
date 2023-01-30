import "./App.css";
import imgCircuito from './pages/Inicio/Assets/circuito.png'

import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//pages
import Inicio from "./pages/Inicio/Inicio";
import Contato from "./pages/contato/Contato";
import Biografia from "./pages/Biografia/Biografia";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/biografia" element={<Biografia />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
