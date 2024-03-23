import React from 'react'
import HomeHero from '@/components/HomeHero'
import Map from '@/components/Map'
import Services4 from '@/components/Services4'
import Testimonials from '@/components/Testimonials'
import Wellcome from '@/components/Wellcome'
import Excercise from '@/components/Excercise'



function HomePage() {
  return (
    <>
      <HomeHero />
      <Wellcome />
      <Services4 />
      <Excercise />
      <Testimonials />
      <Map />
    </>
  )
}

export default HomePage
