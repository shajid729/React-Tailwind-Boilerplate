import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='flex justify-center items-center min-h-screen flex-col'>
            <div className="text-3xl font-bold text-center mb-5">Opps! The page is not found...</div>
            <Link to={'/'}>Go to Home</Link>
        </div>
    )
}

export default NotFound