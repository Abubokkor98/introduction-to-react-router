import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

export default function Home() {
  return (
    <div>
        <Header></Header>
        <h1>This is Home component</h1>
        <Outlet></Outlet>
    </div>
  )
}
