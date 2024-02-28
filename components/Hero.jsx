const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 w-full h-80 flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-white ml-11">Optimiza tu recuperación, mejora el rendimiento y <br />alivia tu dolor.</h1>
      <p className="text-lg text-white mt-4 ml-11">Con ejercicio terapéutico, educación y fisioterapia <br />
        soy el encargado de asistrir una recuperación de la que tú debes ser protagonista.</p>
      <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-md mt-8 ml-11 mr-11">
        Reserva una cita
      </button>
    </div>
  );
};

export default Hero;