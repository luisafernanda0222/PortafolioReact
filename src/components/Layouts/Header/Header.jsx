import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header className="header-container">
        <nav className="nav-links">
          <Link to="/" className="btn">Inicio</Link>
          <Link to="/habilidades-tecnicas" className="btn">Habilidades Técnicas</Link>
          <Link to="/habilidades-sociales" className="btn">Habilidades Sociales</Link>
          <Link to="/nivel-ingles" className="btn">Nivel de Inglés</Link>
          <Link to="/experiencia" className="btn">Experiencia</Link>
          <Link to="/estudios" className="btn">Estudios</Link>
          <Link to="/redes-sociales" className="btn">Redes Sociales</Link>
        </nav>
      </header>
    );
  };
  
  export default Header;