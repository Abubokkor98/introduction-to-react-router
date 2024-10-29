import React from 'react'

export default function User({user}) {
    const {id, name, email, phone} = user;
  return (
<div className='text-center'>
<div className='border border-yellow-400 p-5 rounded-md'>
        <h2 className='font-bold text-2xl'>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
    </div>
</div>
  )
}
