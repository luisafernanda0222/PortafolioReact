import imgProfile from "../../../assets/img/imgProfile.jpg";
import RedesSociales from "../RedesSociales/RedesSociales";

const Home = () => {
  return (
    <>
      <div className="first-container">
        <h1>Luisa Fernanda Majin Castaño</h1>
        <img src={imgProfile} alt="foto" className="image-profile" />
        <p>
          Soy Luisa Fernanda Majin Castaño, tecnóloga en Análisis y Desarrollo de Software en el SENA.
          Me especializo en desarrollo web y bases de datos, destacándome por mi responsabilidad y honestidad.
          Disfruto estudiar, entrenar y escuchar música, siempre con la meta de mejorar y enfrentar nuevos retos en el mundo de la tecnología.
        </p>
      </div>

      {/* Nuevo div separado para Redes Sociales */}
      <div className="redes-footer">
        <RedesSociales />
      </div>
    </>
  );
};

export default Home;
