import React from 'react'
import NavbarItem from './navbarItem'

export default function Navbar() {
  return (
    <nav className='w-full fixed z-40'>
        <div className='px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90'>
            <img src="/images/logo.png" alt="logo" className='h-4 lg:h-7' />
            <div className="flex-row ml-8 gap-7 hidden lg:flex">
                <NavbarItem />
            </div>
        </div>
    </nav>
  )
}
