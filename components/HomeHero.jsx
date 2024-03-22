import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="container px-6 py-10 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Optimiza tu recuperación, <span class="text-blue-500">alivia tu dolor </span><span class="text-light">y mejora el rendimiento.</span></h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">Con ejercicio terapéutico, educación y fisioterapia <span class="font-medium text-blue-500">soy el encargado de asistrir una recuperación de la que tú debes ser protagonista.</span></p>
              <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 mt-2">Reserva tu hora</button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image width={300} height={200} className="w-full h-full" src="https://merakiui.com/images/components/Email-campaign-bro.svg" alt="email illustration vector art" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;