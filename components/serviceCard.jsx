import React from 'react'

const serviceCard = () => {
    const Card = ([imagen, nombre, descripcion])
    return (
        <Link href={}>
            <div className="bg-gray-200 shadow-md rounded-md overflow-hidden flex flex-col items-center p-4 hover:shadow-lg">
                <img
                    src={imagen}
                    className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                    alt={titulo}
                />
                <div className="text-center">
                    <h5 className="text-gray-900 font-bold text-2xl mb-2">{titulo}</h5>
                    <p className="text-gray-600 mb-1">{descripcion}</p>
                </div>
            </div>
        </Link>)
}

export default serviceCard