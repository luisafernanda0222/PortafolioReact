import { Link } from "react-router-dom";
import Footer from "../../Layouts/Footer/Footer";

export const habilidadesSociales = [
  {
    nombre: "Trabajo en equipo",
    descripcion: " Disfruto colaborar con otros, fomentando un entorno donde cada integrante pueda aportar sus ideas y habilidades.",
  },
  {
    nombre: "Adaptibilidad",
    descripcion: "Tengo la capacidad de ajustarme a nuevos retos, cambios y entornos de trabajo, aprendiendo rápidamente y enfrentando desafíos con flexibilidad.",
  },
  {
    nombre: "Empatía",
    descripcion: "Me esfuerzo por comprender y apoyar a mis compañeros, creando un ambiente de trabajo colaborativo y armonioso.",
  },
  {
    nombre: "Liderazgo",
    descripcion: "Soy capaz de organizar y guiar equipos, asegurando que los objetivos se cumplan de manera eficiente.",
  },
];

function HabilidadesSociales() {
  return (
    <div className="habilidades-container">
      <h1 className="habilidades-titulo">Habilidades Sociales</h1>
      <div className="habilidades-grid">
        {habilidadesSociales.map(({ nombre, descripcion }, index) => (
          <div key={index} className="habilidad-card">
            <h2 className="habilidad-nombre">{nombre}</h2>
            <p className="habilidad-descripcion">{descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HabilidadesSociales;
