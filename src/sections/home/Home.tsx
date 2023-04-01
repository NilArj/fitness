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
        <section
            id='home'
            className='bg-gray-20 w-full mt-14 py-10 flex items-center h-full'>
           
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
                className='mx-auto w-5/6 gap-8 flex flex-col items-center justify-center sm:flex-row '>


                {/* Main header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className='flex flex-col sm:flex-row sm:items-center sm:justify-center  '>

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
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2, duration: 0.7 }}
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
            </motion.div>
        </section>
    )
}

export default Home



