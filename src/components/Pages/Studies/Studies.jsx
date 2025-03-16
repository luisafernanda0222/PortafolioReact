import { Link } from "react-router-dom";

const studies = [
  {
    nombre: "Educacion Primaria",
    descripcion: "Cursé mi educación básica en el colegio, adquiriendo habilidades fundamentales en lectura, escritura, matemáticas y ciencias.",
  },
  {
    nombre: "Educacion Secundaria",
    descripcion: "Completé mi formación media en el colegio, desarrolló pensamiento crítico, resolución de problemas y bases en diferentes áreas del conocimiento.",
  },
  {
    nombre: " Tecnic en Analisis y Desarrollo de Software",
    descripcion: "Obtuve conocimientos en lógica de programación, bases de datos y desarrollo de aplicaciones, sentando las bases para mi formación en tecnología.",
  },
  {
    nombre: " Tecnologo en Analisis y Desarrollo de Software",
    descripcion: " Actualmente estoy cursando esta formación, especializándome en el diseño, desarrollo e implementación de software, fortaleciendo mis habilidades en lenguajes de programación, bases de datos y metodologías ágiles.",
  },
  {
    nombre: "Aplicacion de normas y reglas ortograficas en la redaccion de documnetos empresariales",
    descripcion: "Aprendí a redactar documentos formales con precisión, aplicando normas ortográficas y gramaticales para garantizar claridad y profesionalismo en la comunicación escrita.",
  },
  {
    nombre: "Curso introductorio a la formación profesional integral",
    descripcion: "Me permitió desarrollar competencias técnicas y transversales necesarias para el ámbito laboral, ayudándome a comprender mejor el entorno productivo.",
  },
  {
    nombre: "Fortalecimiento en ciencias naturales para articulación con la media",
    descripcion: "Reforcé mis conocimientos en ciencias naturales, lo que me ha ayudado a comprender mejores conceptos clave y su aplicación en distintos contextos.",
  },
  {
    nombre: "Fortalecimiento en lectura crítica para articulación con la media",
    descripcion: "Desarrollé habilidades de análisis y comprensión de textos, lo que me ha permitido mejorar mi pensamiento crítico y mi capacidad de interpretar información en diferentes formatos.",
  },
];

function Studies() {
  return (
    <div className="habilidades-container">
      <h1 className="habilidades-titulo"> Estudios</h1>
      <div className="habilidades-grid">
        {studies.map(({ nombre, descripcion }, index) => (
          <div key={index} className="habilidad-card">
            <h2 className="habilidad-nombre">{nombre}</h2>
            <p className="habilidad-descripcion">{descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Studies;
