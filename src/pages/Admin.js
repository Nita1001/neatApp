import React from 'react'
import { Helmet } from 'react-helmet'
import Table from '../components/Table'
import './styles/Pages.style.css'

const Admin = () => {

    return (
        <>
            <Helmet><title>NeatApp | Admin</title></Helmet>
            <div className='adminsPage'>
                <Table></Table>
            </div>
        </>
    )
}

export default Admin