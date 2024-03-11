import React from 'react'
import Hero from '@/components/Hero'
import About from "@/components/About"
import Map from '@/components/Map'
import Bienvenida from '@/components/Bienvenida'
import ServicesTitle from '@/components/ServicesTitle'
import Services3 from '@/components/Services3'

function HomePage() {
  return (
    <>
      <Hero />
      <Bienvenida />
      <About />
      <ServicesTitle />
      <Services3 />
      <Map />
    </>
  )
}

export default HomePage
