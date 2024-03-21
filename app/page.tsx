import React from 'react'
import Hero from '@/components/Hero'
import About from "@/components/About"
import Map from '@/components/Map'
import Bienvenida from '@/components/Bienvenida'
import Services3 from '@/components/Services3'
import Services4 from '@/components/Services4'


function HomePage() {
  return (
    <>
      <Hero />
      <Bienvenida />
      <About />
      <Services3 />
      <Services4/>
      <Map />
    </>
  )
}

export default HomePage
