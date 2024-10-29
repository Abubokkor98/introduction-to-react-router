import React from 'react'
import { Link } from 'react-router-dom';

export default function User({user}) {
    const {id, name, email, phone} = user;
  return (
<div className='text-center'>
<div className='border border-yellow-400 p-5 rounded-md'>
        <h2 className='font-bold text-2xl'>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
       {/* <Link to={`/user/${id}`} className='btn'> Show Details</Link> */}
       <Link to={`/user/${id}`}>
       <button className='btn'>show details</button>
       </Link>
    </div>
</div>
  )
}
