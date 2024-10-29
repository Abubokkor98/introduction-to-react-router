import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Post({post}) {

    const navigate = useNavigate()
    const handleShowDetail = () => {
        navigate(`/post/${post.id}`)
    }


  return (
    <div className='border border-red-500 p-3'>
        <h2 className="text-2xl font-semibold">
            Post from userID: {post.userId}
        </h2>
        <p className='text-xl'>
            Title{post.title}
        </p>
        <Link to={`/post/${post.id}`} className='btn'>post detail</Link>


        <button onClick={handleShowDetail} className='btn'>Click to see details</button>
    </div>
   )
}
