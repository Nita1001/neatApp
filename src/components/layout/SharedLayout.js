import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from './MainNav'

const SharedLayout = () => {
    return (
        <>
            <MainNav />
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
}

export default SharedLayout