import React from 'react'
import Hero from '@/components/Hero'
import Map from '@/components/Map'
import Services4 from '@/components/Services4'
import Testimonials from '@/components/Testimonials'
import Wellcome from '@/components/Wellcome'
import Excercise from '@/components/Excercise'



function HomePage() {
  return (
    <>
      <Hero />
      <Wellcome/>
      <Services4/>
      <Excercise />
      <Testimonials />
      <Map />
    </>
  )
}

export default HomePage
