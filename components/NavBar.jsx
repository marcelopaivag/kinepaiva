import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-3">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Image src="/images/logo.png" width={150} height={48} className='mr-5' />
                    <Link className="text-xl hover:text-slate-300" href="/">Kinesiología y Rehabilitación</Link>
                </div>
                <div className="flex space-x-3">
                    <Link className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" href="/">Inicio</Link>
                    <Link className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" href="/about">Acerca</Link>
                    <Link className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" href="/services">Servicios</Link>
                    <Link className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" href="/cites">Agenda tu cita</Link>
                    <Link className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" href="/blog">Blog</Link>
                </div>
            </div>
        </nav>
        )
}

export default NavBar