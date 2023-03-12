import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MainNav from './MainNav';
import MobileMainNav from './MobileMainNav';
import Spinner from '../Spinner';
import useViewport from '../../hooks/useViewport';
import backgrounds from '../../utils/backgrounds';

const SharedLayout = () => {
    const { width } = useViewport();
    const breakpoint = 700;
    const location = useLocation();
    const [pageClass, setPageClass] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getPageClass = async () => {
            const path = location.pathname;
            const cssClass = backgrounds[path] || '';
            setPageClass(cssClass);
        };
        getPageClass();

        const checkPageLoaded = () => {
            if (document.readyState === 'complete') {
                setIsLoading(false);
            }
        };
        checkPageLoaded();
        window.addEventListener('load', checkPageLoaded);

        return () => {
            window.removeEventListener('load', checkPageLoaded);
        };
    }, [location]);

    return (
        <>
            {width < breakpoint ? <MobileMainNav /> : <MainNav />}
            {isLoading ? (
                <Spinner />
            ) : (
                <div className={`container ${pageClass}`}>
                    <Outlet />
                </div>
            )}
        </>
    );
};

export default SharedLayout;