import React from 'react'
import { SelectedPage } from '../../shared/types'
import {motion} from "framer-motion"
import ActionButton from '../../shared/ActionButton'
import HomePageImage from "../../assets/images/homepage.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    return (
        <motion.section
            id='home'
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            className='bg-gray-20 pt-20 pb-12 px-3 flex flex-col justify-center items-center gap-10 sm:mt-15 sm:flex-row  sm:gap-0 sm:max-w-3/4'>

            {/* Main header */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.9 }}
            variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 }
            }}
            className='flex flex-col sm:flex-row  sm:items-center sm:justify-center  '>

                <div className='flex flex-col gap-7 items-center'>

                    <div className='flex flex-col text-center text-primary-100 gap-2'>
                        <h1 className='text-4xl font-bold tracking-wider text-justify  sm:text-5xl sm:tracking-normal ' >Olympus Gym</h1>
                        <h5 className='text-2xl tracking-wider text-justify sm:text-3xl sm:tracking-wide '>military fitness center</h5>
                    </div>


                    <div className='flex flex-col gap-7 text-justify max-w-[17rem] sm:max-w-[21rem]'>
                        <div className='text-primary-100 text-base text-justify tracking-wider'>
                            <p>reach your full physical potential with military workouts and classes for all fitness levels</p>
                        </div>

                        {/* Actions*/}
                        <motion.div
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.8 }}
                         transition={{ delay: 0.3,  duration: 0.9 }}
                         variants={{
                             hidden: { opacity: 0, x: -100 },
                             visible: { opacity: 1, x: 0 }
                         }}
                        className='flex items-center justify-center gap-7'>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                            <AnchorLink
                                className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                                href={`#${SelectedPage.ContactUs}`}>
                                <p>Learn More</p>
                            </AnchorLink>
                        </motion.div>
                    </div>

                </div>
            </motion.div>

            {/* Main Image */}
            <div className=''>
                <img className='w-full h-full object-cover' alt='home-page-image' src={HomePageImage} />
            </div>

        </motion.section>
    )
}

export default Home



