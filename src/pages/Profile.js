import React from 'react'
import { Helmet } from 'react-helmet'
import HexagonsGenerator from '../components/HexagonsGenerator';
import useBadges from '../hooks/useBadges';
import Spinner from '../components/Spinner';
import './styles/Pages.style.css'

const Profile = () => {
    const usersName = localStorage.getItem('name');
    const { badges, loading } = useBadges();

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
                        {loading ? (
                            <Spinner />
                        ) : (
                            <HexagonsGenerator badges={badges} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile