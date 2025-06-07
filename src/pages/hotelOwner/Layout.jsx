import React from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import Sidebar from '../../components/hotelOwner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <div className='flex flex-1'>
                <Sidebar />
                <main className='flex-1 p-4 pt-10 md:px-10'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout
