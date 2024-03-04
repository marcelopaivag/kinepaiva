import React from 'react'
import Hero from '@/components/Hero'
import About from "@/components/About"
import Services2 from '@/components/Services2'
import Map from '@/components/Map'
import Bienvenida from '@/components/Bienvenida'
import ServicesTitle from '@/components/ServicesTitle'

function HomePage() {
  return (
    <>
      <Hero />
      <Bienvenida />
      <About />
      <ServicesTitle />
      <Services2 />
      <Map location={undefined} />
    </>
  )
}

export default HomePage
