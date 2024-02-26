import Link from "next/link";

function Services({ services }) {
    return (
        <ul className="">
            {services.map(service => (
                <Link key={service.id} href={`/services/${service.id}`}>
                    <li key={service.id}
                        className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between">
                        <div>
                            <h5 className="font-bold">{service.id}. {service.first_name}</h5>
                            <p className="text-slate-100">email: {service.email}</p>
                        </div>
                        <img src={service.avatar} className="rounded-full w-20" />
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default Services