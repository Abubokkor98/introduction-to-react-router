import React from 'react'
import { Link } from 'react-router-dom'

export default function Post({post}) {
  return (
    <div className='border border-red-500 p-3'>
        <h2 className="text-2xl font-semibold">
            Post from userID: {post.userId}
        </h2>
        <p className='text-xl'>
            Title{post.title}
        </p>
        <Link to={`/post/${post.id}`} className='btn'>post detail</Link>
    </div>
   )
}
