
"use client"
import About from '@/components/About';
import { useRouter } from 'next/navigation';

const AboutPage = () => {
  const router = useRouter()
  return (
    <>
      <About />
    </>
  )
}

export default AboutPage