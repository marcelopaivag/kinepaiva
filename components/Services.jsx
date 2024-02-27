import Link from "next/link";

function Services({ services }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service) => (
                <Link key={service.id} href={`/services/${service.id}`}>
                    <div className="bg-gray-200 shadow-md rounded-md overflow-hidden flex flex-col items-center p-4 hover:shadow-lg">
                        <img
                            src={service.avatar}
                            className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                            alt={service.first_name}
                        />
                        <div className="text-center">
                            <h5 className="text-gray-900 font-bold text-2xl mb-2">{service.first_name}</h5>
                            <p className="text-gray-600 mb-1">{service.email}</p>
                            <p className="text-gray-400">{service.id}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>)
}

export default Services