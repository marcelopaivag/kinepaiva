
"use client"
import { useRouter } from 'next/navigation';

const AboutPage = () => {
  const router = useRouter()
  return (
    <section>
      <h1>Acerca de</h1>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nisi officia suscipit ullam earum non accusantium corporis asperiores, alias sapiente? Id, accusantium suscipit cupiditate nisi totam doloremque aliquid atque quibusdam?</p>

      <button className='bg-sky-400 px-3 py-2 rounded-md'
      onClick={()=>{
        router.push('/')
      }}>
        Volver al inicio
      </button>

    </section>
  )
}

export default AboutPage