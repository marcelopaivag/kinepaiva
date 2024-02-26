import Services from '@/components/Services'

async function fetchRehabservices() {
    const res = await fetch("https://reqres.in/api/users")
    const data = await res.json()
    return (data.data)
  }

  async function page() {
    const services = await fetchRehabservices()

    return (
      <Services services={services} />
    )
}

export default page