import React from 'react'
import Hero from '@/components/Hero'
import About from "@/components/About"
import Map from '@/components/Map'
import Bienvenida from '@/components/Bienvenida'
import ServicesTitle from '@/components/ServicesTitle'
import Services2 from '@/components/Services2'

function HomePage() {
  return (
    <>
      <Hero />
      <Bienvenida />
      <About />
      <ServicesTitle />
      <Services2 />
      <Map />
    </>
  )
}

export default HomePage
