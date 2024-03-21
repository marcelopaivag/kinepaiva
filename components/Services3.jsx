import servicesData from "../servicesData"



const ServicioCard = ({ imagen, nombre, descripcion, definicion }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imagen} alt={nombre} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{nombre}</div>
        <p className="text-gray-700 text-base">{descripcion}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {definicion}</span>
      </div>
    </div>
  );
};

const Servicios = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {servicesData.map((servicio, index) => (
        <ServicioCard key={index} {...servicio} />
      ))}
    </div>
  );
};

export default Servicios;