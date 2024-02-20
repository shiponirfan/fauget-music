"use client"
import React, { useState } from 'react'
import Modal from '../modal/Modal'
import SignIn from '@/components/signin/SignIn';
import SignUp from '@/components/signup/SignUp';

const LoginNavbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    return (
        <div>
            <div className='flex justify-between items-center mb-14'>
                <h2 className='font-semibold text-3xl'>Welcome to fauget music services</h2>
                <div className='space-x-8'>
                    <button onClick={() => setShowModal(true)} className='font-semibold text-lg py-4 px-20 bg-primary-btn hover:bg-secondary-btn duration-300 border border-black rounded-full'>Sign in</button>
                    <button onClick={() => setShowModal2(true)} className='font-semibold text-lg py-4 px-20 bg-secondary-btn hover:bg-primary-btn duration-300 border border-black rounded-full'>Sign up</button>
                </div>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <SignIn setShowModal2={setShowModal2} onClose={() => setShowModal(false)} />
            </Modal>
            <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
                <SignUp setShowModal={setShowModal} onClose={() => setShowModal2(false)} />
            </Modal>
        </div>
    )
}

export default LoginNavbar