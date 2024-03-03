
"use client"
import About from '@/components/About';
import { useRouter } from 'next/navigation';
import AboutHero from '@/components/AboutHero';
import Map from '@/components/Map';

const AboutPage = () => {
  const router = useRouter()
  return (
    <>
      <AboutHero />
      <About />
      <Map />
    </>
  )
}

export default AboutPage