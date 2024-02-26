import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-3 mb-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Image src="/images/logo.png" width={150} height={48} className='mr-5' />
                    <Link className="text-white text-xl" href="/">Kinesiología y Rehabilitación</Link>
                </div>
                <div className="flex space-x-3">
                    <Link className="text-white" href="/">Inicio</Link>
                    <Link className="text-white" href="/about">Acerca</Link>
                    <Link className="text-white" href="/services">Servicios</Link>
                    <Link className="text-white" href="/bookings">Agenda tu cita</Link>
                    <Link className="text-white" href="/blog">Blog</Link>
                </div>
            </div>
        </nav>
        )
}

export default NavBar