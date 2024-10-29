import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div className='max-w-screen-lg mx-auto'>
        {/* fixed header */}
        <Header></Header>
        {/* changAble content */}
        <Outlet></Outlet>
        {/* fixed footer */}
        <Footer></Footer>
    </div>
  )
}
