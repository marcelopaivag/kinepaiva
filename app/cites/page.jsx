"use client"

const page = () => {

  const onSubmit = async (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const lastname = e.target.lastname.value;
    const phone = e.target.phone.value;
    const mail = e.target.mail.value;
    const dateTime = e.target.dateTime.value;

    const res = await fetch('api/cites', {
      method: 'POST',
      body: JSON.stringify({ name, lastname, phone, mail, dateTime }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)




  }


  return (
    <form className="container mx-auto max-w-lg" onSubmit={onSubmit}>
      <h2 className="text-2xl font-bold mb-8">Reserva tu hora</h2>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-1/2 px-3">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-2 border-gray-300 rounded p-2 mb-6 w-full text-black"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label htmlFor="lastname">Apellido:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="border-2 border-gray-300 rounded p-2 mb-6 w-full text-black"
          />
        </div>
        <div className="w-full px-3">
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            className="border-2 border-gray-300 rounded p-2 mb-6 w-full text-black"
          />
        </div>
        <div className="w-full px-3">
          <label htmlFor="mail">Correo electrónico:</label>
          <input
            type="email"
            id="mail"
            name="mail"
            className="border-2 border-gray-300 rounded p-2 mb-6 w-full text-black"
          />
        </div>
        <div className="w-full px-3">
          <label htmlFor="dateTime">Fecha y hora:</label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            className="border-2 border-gray-300 rounded p-2 mb-6 w-full text-black"
          />
        </div>
        <div className="w-full px-3">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Agendar cita
          </button>
        </div>
      </div>
    </form>
  )
}

export default page