import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Post from '../Post/Post';

export default function Posts() {
    const posts = useLoaderData();
  return (
    <div>
        <h2 className="text-5xl">Posts: {posts.length}</h2>
       <div className='grid md:grid-cols-3 gap-3'>
       {
            posts.map(post=> <Post post={post} key={post.id}></Post>)
        }
       </div>
    </div>
  )
}
