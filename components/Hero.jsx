const Hero = () => {
    return (
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 w-full h-80 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Título de tu página web</h1>
        <p className="text-lg text-white mt-4">Eslogan o descripción breve de tu página web</p>
        <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-md mt-8">
          Más información
        </button>
      </div>
    );
  };
  
  export default Hero;