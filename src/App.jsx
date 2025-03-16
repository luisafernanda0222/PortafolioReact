import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import "./index.css";

import Header from "./components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";

import Home from "./components/Pages/Home/Home";
import Experience from "./components/Pages/Experience/Experience";
import HabilidadesTecnicas from "./components/Pages/HabilidadesTecnicas/HabilidadesTecnicas";
import HabilidadesSociales from "./components/Pages/HabilidadesSociales/HabilidadesSociales";
import NivelIngles from "./components/Pages/NivelIngles/NivelIngles";
import Studies from "./components/Pages/Studies/Studies";
import RedesSociales from './components/Pages/RedesSociales/RedesSociales';

export const App = () => {
  return (
    <Router>
      <Header />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habilidades-tecnicas" element={<HabilidadesTecnicas />} />
          <Route path="/habilidades-sociales" element={<HabilidadesSociales />} />
          <Route path="/nivel-ingles" element={<NivelIngles />} />
          <Route path="/experiencia" element={<Experience />} />
          <Route path="/estudios" element={<Studies />} />
          <Route path="redes-sociales" element={<RedesSociales />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
