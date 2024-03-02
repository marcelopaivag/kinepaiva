"use client"
import React from 'react'

const page = () => {
  const onSubmit = async (e) => {
    e.preventDefault()
    const nombre = e.target.nombre.value
    const apellido = e.target.apellido.value
    const telefono = e.target.telefono.value
    const correo = e.target.correo.value
    const fechaHora = e.target.fechaHora.value

    const res = await fetch('api/cites', {
      method: 'POST',
      body: JSON.stringify({ nombre, apellido, telefono, correo, fechaHora }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
  }


  return (
    <form className="container mx-auto max-w-lg" onSubmit={onSubmit}>
      <h2 className="text-2xl font-bold mb-8">Reserva tu hora</h2>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-1/2 px-3">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="border-2 border-gray-300 rounded p-2 mb-6 w-full text-black"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            className="border-2 border-gray-300 rounded p-2 mb-6 w-full text-black"
          />
        </div>
        <div className="w-full px-3">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className="border-2 border-gray-300 rounded p-2 mb-6 w-full text-black"
          />
        </div>
        <div className="w-full px-3">
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            className="border-2 border-gray-300 rounded p-2 mb-6 w-full text-black"
          />
        </div>
        <div className="w-full px-3">
          <label htmlFor="fechaHora">Fecha y hora:</label>
          <input
            type="datetime-local"
            id="fechaHora"
            name="fechaHora"
            className="border-2 border-gray-300 rounded p-2 mb-6 w-full text-black"
          />
        </div>
        <div className="w-full px-3">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Agendar cita
          </button>
        </div>
      </div>
    </form>
  )
}

export default page