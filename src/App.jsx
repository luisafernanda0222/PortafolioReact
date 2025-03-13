import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css"
import imgProfile from "./assets/img/imgProfile.jpg";
import HabilidadesTecnicas from "./components/Pages/HabilidadesTecnicas/HabilidadesTecnicas";
import HabilidadesSociales from '../src/components/Pages/HabilidadesSociales/HabilidadesSociales'
import NivelIngles from '../src/components/Pages/NivelIngles/NivelIngles'
import Experience from '../src/components/Pages/Experience/Experience'
import Studies from '../src/components/Pages/Studies/Studies'
import Footer from "./components/Layouts/Footer/Footer";

export const App = () => {
  return (
    <Router>
      <div className="main-container">
        <div className="first-container">
          <h1>Luisa Fernanda Majin Castaño</h1>
          <img src={imgProfile} alt="foto" className="image-profile" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>

        <div className="buttons-container">
          <Link to="/habilidades-tecnicas" className="btn">Habilidades Técnicas</Link>
          <Link to="/habilidades-sociales" className="btn">Habilidades Sociales</Link>
          <Link to="/nivel-ingles" className="btn">Nivel de Inglés</Link>
          <Link to="/experiencia" className="btn">Experiencia Profesional</Link>
          <Link to="/estudios" className="btn">Estudios</Link>
          <Link to="/redes-sociales" className="btn">Redes Sociales</Link>
        </div>

        <div className="content-container">
        <Routes>
        <Route path="/habilidades-tecnicas" element={<HabilidadesTecnicas />} />
        <Route path="/habilidades-sociales" element={<HabilidadesSociales />} />
        <Route path="/nivel-ingles" element={<NivelIngles />} />
        <Route path="/experiencia" element={<Experience />} />
        <Route path="/estudios" element={<Studies />} />
        </Routes>
        </div>

      </div>
      <footer/>
    </Router>
  );
};

export default App;
