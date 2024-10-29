import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function UserDetails() {
    const user = useLoaderData();
    const {name, email, phone, website} = user;
  return (
    <div>
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
    </div>
  )
}
