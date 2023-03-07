import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from './MainNav'
import MobileMainNav from './MobileMainNav'
import useViewport from '../../hooks/useViewport'
const SharedLayout = () => {
    const { width } = useViewport();
    const breakpoint = 700;

    return (
        <>
            {width < breakpoint ? <MobileMainNav /> : <MainNav />}
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
}

export default SharedLayout