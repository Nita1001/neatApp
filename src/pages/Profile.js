import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import HexagonsGenerator from '../components/HexagonsGenerator';
import useGiveBadges from '../hooks/useGiveBadges'

const Profile = () => {
    const usersName = localStorage.getItem('name');
    const { setCompletedTasksBadge } = useGiveBadges();

    useEffect(() => {
        setCompletedTasksBadge();
    }, [setCompletedTasksBadge])

    return (
        <>
            <Helmet>
                <title>NeatApp | Profile</title>
            </Helmet>
            <div className='profile'>
                <section className='profileHeader profileHeaderBackground'>
                    <h2>Hello {usersName}</h2>
                    <p>This is your profile page.</p>
                    <p>See the progress you've made</p>
                    <p>and manage your profile or assigned tasks</p>
                </section>
                <div className='flex-Container'>
                    <div className='homeCard'>
                        <HexagonsGenerator></HexagonsGenerator>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile