import React from 'react'
import blogData from '@/blogData'

const BlogPosts = ({ categoria, imagen, titulo, descripcion, fecha }) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"> {/* Estableciendo un tamaño fijo */}
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg h-full flex flex-col"> {/* Agregando flex y flex-col */}
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={imagen} alt="content" />
                <div className="flex-grow"> {/* Permitiendo que el contenido crezca dentro del contenedor */}
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">{categoria} / {fecha}</h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">{titulo}</h2>
                    <p className="leading-relaxed text-base">{descripcion}</p>
                </div>
            </div>
        </div>
    )
}

const Blogentries = () => {
    return (
        <section className="text-gray-400 body-font bg-gray-900">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Blog!</h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
            </div>
            <div className="flex flex-wrap -m-4 justify-center"> {/* Utilizando -m-4 para corregir el espacio negativo */}
                {blogData.map((card, index) => (
                    <BlogPosts key={index} {...card} />
                ))}
            </div>
        </section>
    )
}

export default Blogentries;
