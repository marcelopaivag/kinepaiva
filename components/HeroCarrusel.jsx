import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import car1 from '@/public/images/1.jpg'
import car2 from '@/public/images/blog.png'
import car3 from '@/public/images/consulta.png'

const HeroCarrusel = () => {
  const images = [
    { src: {car1}, alt: 'Imagen 1' },
    { src: {car2}, alt: 'Imagen 2' },
    { src: {car3}, alt: 'Imagen 3' },
  ];

  return (
    <div className="relative h-screen">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        {images.map((image) => (
          <Image key={image.src} src={image.src} alt={image.alt} className="object-cover h-full w-full" />
        ))}
      </Carousel>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold">Título del hero</h1>
        <p className="text-2xl mt-4">Subtítulo del hero</p>
      </div>
    </div>
  );
};

export default HeroCarrusel;
