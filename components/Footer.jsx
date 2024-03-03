import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6">
            <div className="container mx-auto flex justify-between items-center">
                <Image src="/images/logo.png" width={150} height={48} className='mr-5' />
                <div className="text-lg font-semibold">Kinesiólogo Marcelo Paiva G.</div>

                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center">
                    <Link className='hover:text-slate-300' href="/">Inicio</Link>
                    <Link className='hover:text-slate-300' href="/about">Acerca</Link>
                    <Link className='hover:text-slate-300' href="/services">Servicios</Link>
                    <Link className='hover:text-slate-300' href="/cites">Agenda tu cita</Link>
                    <Link className='hover:text-slate-300' href="/blog">Blog</Link>
                </div>       
          </div>

            <div className="mt-4 text-sm text-gray-500">
                &copy; 2024 Marcelo Paiva G. Todos los derechos reservados.
            </div>
        </footer>)
}

export default Footer