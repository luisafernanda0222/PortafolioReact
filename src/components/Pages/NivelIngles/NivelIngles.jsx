import { Link } from "react-router-dom";

const nivelIngles = [
  {
    nombre: "Nivel de Ingles",
    descripcion: "Mi nivel de inglés es A1 . Puedo comprender y usar expresiones básicas, presentarme y comunicarme en situaciones sencillas. Estoy trabajando para mejorar mi fluidez.",
  },
  
];

function NivelIngles() {
  return (
    <div className="habilidades-container">
      <h1 className="habilidades-titulo"> Nivel de ingles</h1>
      <div className="habilidades-grid">
        {nivelIngles.map(({ nombre, descripcion }, index) => (
          <div key={index} className="habilidad-card">
            <h2 className="habilidad-nombre">{nombre}</h2>
            <p className="habilidad-descripcion">{descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NivelIngles;
