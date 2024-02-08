import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../Layout/Shop/SideBar'
import Topbar from '../Layout/Shop/Topbar'
const RootLayout = () => {
  return (
    <div className='w-full flex max-w-[1440px] mx-auto md:flex-row flex-col'>
        <Topbar/>
        <SideBar/>
        <section className="flex flex-1 h-full">
            <Outlet />
        </section>
    </div>
  )
}

export default RootLayout