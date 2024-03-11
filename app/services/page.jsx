import Services from '@/components/Services'
import Services2 from '@/components/Services2'
import ServiceHero from '@/components/ServicesHero'

async function fetchRehabservices() {
    const res = await fetch("https://reqres.in/api/users")
    const data = await res.json()
    return (data.data)
  }

  async function page() {
    const services = await fetchRehabservices()

    return (
      <>
      <ServiceHero />
      <Services2 />
      <Services services={services} />
      <serviceCards  />
      </>
    )
}

export default page