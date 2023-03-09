import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MainNav from './MainNav';
import MobileMainNav from './MobileMainNav';
import useViewport from '../../hooks/useViewport';
import backgrounds from '../../utils/backgrounds';

const SharedLayout = () => {
    const { width } = useViewport();
    const breakpoint = 700;
    const location = useLocation();
    const [pageClass, setPageClass] = useState('');

    useEffect(() => {
        const getPageClass = async () => {
            const path = location.pathname;
            const cssClass = backgrounds[path] || '';
            setPageClass(cssClass);
        };
        getPageClass();
    }, [location]);

    return (
        <>
            {width < breakpoint ? <MobileMainNav /> : <MainNav />}
            <div className={`container ${pageClass}`}>
                <Outlet />
            </div>
        </>
    );
};

export default SharedLayout;