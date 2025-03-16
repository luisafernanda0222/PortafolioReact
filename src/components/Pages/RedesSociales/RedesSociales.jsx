import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

function RedesSociales() {
  return (
    <div className="redes-container">
      
      <div className="redes-grid">
        <a href="https://github.com/luisafernanda0222">
          <FaGithub size={30} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/luisa-fernanda-majin-casta%C3%B1o-840378351" >
          <FaLinkedin size={30} /> LinkedIn
        </a>
        <a href="https://wa.me/573007233091">
          <FaWhatsapp size={30} /> WhatsApp
        </a>
        <a href="https://www.instagram.com/luis4fern4nd4?igsh=aTd0djExaDc3ODVw&utm_source=qr">
          <FaInstagram size={30} />  Instagram
        </a>
        <a href="mailto:luisafernandamajin0222@gmail.com">
          <FaEnvelope size={30} /> Correo
        </a>
      </div>
    </div>
  );
}

export default RedesSociales;
