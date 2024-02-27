"use client"

import Link from 'next/link'
import React from 'react'

const PostCard = ({ post }) => {
    return (
        <div className='bg-gray-950 p-10'>
            <img src={post.image} alt={post.title} />
            <Link href={`/blog/${post.id}`}>
                <h3 className='text-xl font-bold mb-4'>
                    {post.id}. {post.title}
                </h3>
            </Link>
            <p className='text-slate-300'>{post.body}</p>
            <button onClick={() => { }}>Click</button>
        </div>
    )
}

export default PostCard