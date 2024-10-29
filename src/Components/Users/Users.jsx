import React from 'react'
import { useLoaderData } from 'react-router-dom'
import User from '../User/User';

export default function Users() {
    const users = useLoaderData()

    console.log(users);

  return (
    <div>
        <h2 className='text-7xl'>Our Users: {users.length}
        </h2>
        <p className='text-3xl'>Our fantastic users</p>
        <div className='grid md:grid-cols-3 gap-2 mb-2'>
            {
                users.map(user=> <User key={user.id} user={user}></User>)
            }
        </div>
    </div>
  )
}
