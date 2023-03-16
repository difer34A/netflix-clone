import React from 'react'
import MobileMenu from './mobileMenu'
import NavbarItem from './navbarItem'
import AccountMenu from './accountMenu'
import {useCallback, useState, useEffect} from 'react'

const TOP_OFFSET = 66;

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showAccountMenu, setShowAccountMenu] = useState(false)
    const [showBackground, setShowBackground] = useState(false)
    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current)=> !current)
    }, [])
    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current)=> !current)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= TOP_OFFSET){
                setShowBackground(true);
            }else{
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])
    

    return (
        <nav className='w-full fixed z-40'>
            <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""}`}>
                <img src="/images/logo.png" alt="logo" className='h-4 lg:h-7' />
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label='Home'/>
                    <NavbarItem label='Series'/>
                    <NavbarItem label='Films'/>
                    <NavbarItem label='New & Popular'/>
                    <NavbarItem label='My list'/>
                    <NavbarItem label='Browse by languages'/>
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative select-none">
                    <h1 className='text-white text-sm' >Browse</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 text-white transition duration-200 ${showMobileMenu ? "rotate-180" : "rotate-0"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    <MobileMenu visible={showMobileMenu} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    {/* search & bell */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>

                    {/* user profile img */}
                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative select-none">
                        <div className="w-6 aspect-square lg:w-10 rounded-md overflow-hidden">
                            <img src="/images/default-blue.png" alt="profile img" />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 text-white transition duration-200 ${showAccountMenu ? "rotate-180" : "rotate-0"}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        <AccountMenu visible={showAccountMenu}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}
