"use client"

import { useState } from "react"
import servicesData from "../servicesData"
import { Card } from "react-bootstrap"

const Services3 = () => {
  const [Cards, setCard] = useState(servicesData)

  return (
    <div>
      {Cards.map((card) => (
        <Card
          key={card.nombre}
          titulo={card.nombre}
          descripcion={card.descripcion}
          imagen={card.imagen}
        />
      ))}
    </div>)
}

export default Services3