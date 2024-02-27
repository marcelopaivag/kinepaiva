async function getService(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();
    return data.data;
}

async function ServicePage({ params }) {
    const service = await getService(params.id);

    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center bg-gray-200 rounded-md shadow-md p-8">
                <img
                    src={service.avatar}
                    alt=""
                    className="h-48 w-48 rounded-full object-cover mx-auto my-4"
                />
                <h3 className="text-3xl font-bold text-gray-800">{`${service.id} ${service.first_name} ${service.last_name}`}</h3>
                <p className="text-gray-600">email: {service.email}</p>
            </div>
        </div>
    )
}

export default ServicePage;