import React, { useState } from 'react'
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { SelectedPage } from '../../shared/types'
import Logo from "../../assets/images/logo-3.png"
import Link from './Link'
import ActionButton from "../../shared/ActionButton"


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
}


const Navbar = ({isTopOfPage ,selectedPage, setSelectedPage }: Props) => {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const navbarBackground = isTopOfPage ? "": "bg-primary-100 drop-shadow"

    return (
        <nav className={`${navbarBackground} w-full p-4 sm:text-lg sticky top-0 z-50`}>
            <div className='items-center justify-between flex md:w-3/4 mx-auto'>

                {/* Left side */}
                <div className="flex items-center">
                    <img alt='lgo' src={Logo} className="max-h-11 w-auto" />
                    <p className='ml-2'>Olympus</p>
                </div>

                {/* Right side */}
                <div className="sm:hidden rounded-full bg-primary-500">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className={`${showMenu ? "hidden" : "block"} items-center p-2 outline-none`}
                    >
                        <Bars4Icon className='text-white h-5 hover:text-primary-300' />
                    </button>
                </div>
                
                {/* web design */}

                 <div className=" hidden sm:flex sm:gap-3 md:gap-6">
                 <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                 <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                 <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                 <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
             </div>

             <div className="hidden items-center sm:flex sm:gap-3 md:gap-6">
                    <p>Sign In</p>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Become a Member
                    </ActionButton>
                </div>
             
             {/* mobile design */}

                {showMenu ? (
                    <div className='fixed top-0 right-0 min-h-screen p-4 w-[60%] bg-primary-100 z-100 text-2xl'>

                        <div className="fixed top-5 right-4 p-2 rounded-full border bg-primary-500">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className={`${showMenu ? "block" : "hidden"} mx-auto`}>
                            <XMarkIcon className='text-primary-100 h-5 hover:text-primary-300' />
                        </button>
                        </div>

                        <div className="flex flex-col gap-10 py-16 items-center">
                            <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>

                    </div>
                ) : ""}

            </div>
        </nav>
    )
}

export default Navbar
