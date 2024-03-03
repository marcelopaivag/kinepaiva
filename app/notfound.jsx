import Link from 'next/link'

const notfound = () => {
    return (
        <section className='text-4xl font-bold'>
            <div className='text-center'>
                <h1>Not Found</h1>
                <Link rel='stylesheet' href="/" className='text-slate-400'/>
            </div>
        </section>
    )
}

export default notfound