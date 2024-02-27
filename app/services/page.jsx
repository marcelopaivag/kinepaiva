import Services from '@/components/Services'
import Services2 from '@/components/Services2'

async function fetchRehabservices() {
    const res = await fetch("https://reqres.in/api/users")
    const data = await res.json()
    return (data.data)
  }

  async function page() {
    const services = await fetchRehabservices()

    return (
      <>
      <Services services={services} />
      <Services2 />
      </>
    )
}

export default page