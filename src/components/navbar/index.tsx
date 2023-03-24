import React, { useState } from 'react'
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "../../assets/images/logo-1.png"
import Link from './Link'


type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {

    const flexBetween = "flex items-center justify-between"

    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>

                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* Right side */}
                        <div className={`${flexBetween} `}>
                        <img alt='lgo' src={Logo} className="max-h-11 w-auto" />
                        <p>Olympus</p>
                        </div>
                      

                        {/* Left side */}
                        <div className={`${flexBetween} w-full `}>
                            <div className={`${flexBetween} gap-8 text-sm `}>
                                <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page='Our Classes'selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page='Contact Us'selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            </div>

                            <div className={`${flexBetween} gap-8 `}>
                                <p>Sign In</p>
                                <button>Become a Member</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar