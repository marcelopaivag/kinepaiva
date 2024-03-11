"use client"

import { useState } from "react"
import servicesData from '../servicesData'

const serviceCards = () => {
    const [cards] = useState(servicesData)

    return (
        <div>
            {cards.map((card) => (
                <div>
                    key={card.nombre}
                    title={card.nombre}
                    description={card.descripcion}
                    image={card.imagen}
                </div>
            ))}
        </div>)
}

export default serviceCards