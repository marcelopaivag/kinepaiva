"use client"
import React from 'react'

const page = () => {
  return (
    <>
      <p className='mt-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Illum nisi officia suscipit ullam earum non accusantium corporis asperiores,
        alias sapiente? Id, accusantium suscipit cupiditate nisi totam doloremque aliquid atque quibusdam?</p>
      <button className='bg-sky-400 px-3 py-2 rounded-md'
        onClick={() => {
          router.push('/')
        }}>
        Volver al inicio
      </button>
    </>
  )
}

export default page