import React from 'react'
import PostCard from '../../components/PostCard'
import BlogHero from '@/components/BlogHero'


async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

async function blog() {
    const posts = await loadPosts()

    return (
        <>
        <BlogHero />
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {posts.map((post) => (
                    <PostCard post={post} key={post.id} />
                ))}
            </div>
        </div>
        </>
        )
}

export default blog