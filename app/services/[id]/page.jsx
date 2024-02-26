async function getService(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();
    return data.data;
}

async function ServicePage({ params }) {
    const service = await getService(params.id);

    return (
        <div className="bg-red-300 p-10 rounded-md">
            <img src={service.avatar} alt="" className="m-auto my-4" />
            <h3 className="text-3xl font-bold">{service.id} {service.first_name} {service.lastname}</h3>
            <p>email: {service.email}</p>
        </div>
    )
}

export default ServicePage;