import { Link } from "react-router-dom";

const experiencie = [
  {
    nombre: " Experiencia",
    descripcion: "Aún no tengo experiencia laboral, ya que estoy finalizando mi formación en Análisis y Desarrollo de Software en el SENA. Sin embargo, he desarrollado diversos proyectos académicos que me han permitido aplicar mis conocimientos en Java, JavaScript, React y bases de datos MySQL. Además, tengo habilidades en trabajo en equipo, resolución de problemas y adaptabilidad, lo que me permite integrarme fácilmente a nuevos entornos y aprender de manera rápida. Estoy buscando mi primera oportunidad para aplicar y seguir desarrollando mis habilidades en un entorno profesional.",
  },
  
];

function Experience() {
  return (
    <div className="habilidades-container">
      <h1 className="habilidades-titulo"> Experiencia</h1>
      <div className="habilidades-grid">
        {experiencie.map(({ nombre, descripcion }, index) => (
          <div key={index} className="habilidad-card">
            <h2 className="habilidad-nombre">{nombre}</h2>
            <p className="habilidad-descripcion">{descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
