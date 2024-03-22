import Services4 from '@/components/Services4'
import Map from '@/components/Map'

async function fetchRehabservices() {
    const res = await fetch("https://reqres.in/api/users")
    const data = await res.json()
    return (data.data)
  }

  async function page() {
    const services = await fetchRehabservices()

    return (
      <>
      <Services4 /> {Services4}
      <Map />
      </>
    )
}

export default page