import React from "react"
import reactImg from "../../../assets/img/reactImg.png"
import javaScripImg from '../../../assets/img/javaScripImg.png'
import tailwindImg from '../../../assets/img/tailwindImg.png'
import javaImg from '../../../assets/img/javaImg.png'

const tecnologias = [
  {
    nombre: "React",
    imagen: reactImg,  
    descripcion: "Estoy empezando a aprender React mientras desarrollo mi portafolio web. Actualmente, estoy viendo estructuración de componentes, React Router DOM y modularización.",
  },
  {
    nombre: "HTML, CSS, JavaScript",
    imagen: javaScripImg,
    descripcion: "Tengo conocimientos básicos y lo estoy aprendiendo desde cero, paso a paso. Trabajo con JavaScript en proyectos como una calculadora de notas y un traductor de palabras.",
  },
  {
    nombre: "Tailwind CSS",
    imagen: tailwindImg,
    descripcion: "Utilice Tailwind CSS para el diseño responsivo, aprovechando su sistema de utilidades para escribir estilos de forma rápida y eficiente sin necesidad de CSS adicional.",
  },
  {
    nombre: "Java",
    imagen: javaImg,
    descripcion: "Trabajo con Java en proyectos que utilizan bases de datos MySQL, aplicando patrones como DAO o Repository. Desarrollé un sistema de gestión de empleados y manejo IntelliJ IDEA como entorno de desarrollo, además de usar Git para control de versiones. ",
  },
];

function HabilidadesTecnicas() {
  return (
    <div className="habilidades-container">
      <h1 className="habilidades-titulo">Habilidades Técnicas</h1>
      <div className="habilidades-grid">
        {tecnologias.map(({ nombre, imagen, descripcion }, index) => (
          <div key={index} className="habilidad-card">
            <img src={imagen} alt={nombre} className="habilidad-imagen"/>
            <h2 className="habilidad-nombre">{nombre}</h2>
            <p className="habilidad-descripcion">{descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HabilidadesTecnicas;
