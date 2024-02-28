
"use client"
import About from '@/components/About';
import { useRouter } from 'next/navigation';
import AboutHero from '@/components/AboutHero';

const AboutPage = () => {
  const router = useRouter()
  return (
    <>
      <AboutHero />
      <About />
    </>
  )
}

export default AboutPage