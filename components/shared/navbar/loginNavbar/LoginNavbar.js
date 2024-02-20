import React from 'react'

const LoginNavbar = () => {
    return (
        <div className='flex justify-between items-center mb-14'>
            <h2 className='font-semibold text-3xl'>Welcome to fauget music services</h2>
            <div className='space-x-8'>
                <button className='font-semibold text-lg py-4 px-20 bg-primary-btn hover:bg-secondary-btn duration-300 border border-black rounded-full'>Sign in</button>
                <button className='font-semibold text-lg py-4 px-20 bg-secondary-btn hover:bg-primary-btn duration-300 border border-black rounded-full'>Sign up</button>
            </div>
        </div>
    )
}

export default LoginNavbar