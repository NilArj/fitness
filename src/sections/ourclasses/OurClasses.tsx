import React from 'react'
import { SelectedPage, ClassType } from '../../shared/types'
import { motion } from 'framer-motion'
import SectionTitle from '../../components/SectionTitle'
import Class from '../../components/Class'
import imageOne from "../../assets/images/swimming.jpg"
import imageTwo from "../../assets/images/trx-training.jpg"
import imageThree from "../../assets/images/jiujitsu.jpg"
import imageFour from "../../assets/images/using-dumbells.jpg"
import imageFive from "../../assets/images/mma.jpg"


const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit amet officia tempore ea laudantium vitae obcaecati odit ipsam laborum corrupti sunt blanditiis quod, magnam tenetur, excepturi omnis iure maxime maiores!",
        image: imageFour
    },
    {
        name: "TRX Training Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit amet officia tempore ea laudantium vitae obcaecati odit ipsam laborum corrupti sunt blanditiis quod, magnam tenetur, excepturi omnis iure maxime maiores!",
        image: imageTwo
    },
    {
        name: "Jiu Jitsu Training Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit amet officia tempore ea laudantium vitae obcaecati odit ipsam laborum corrupti sunt blanditiis quod, magnam tenetur, excepturi omnis iure maxime maiores!",
        image: imageThree
    },
    {
        name: "Swimming Training Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit amet officia tempore ea laudantium vitae obcaecati odit ipsam laborum corrupti sunt blanditiis quod, magnam tenetur, excepturi omnis iure maxime maiores!",
        image: imageOne
    },
    {
        name: "MMA Training Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit amet officia tempore ea laudantium vitae obcaecati odit ipsam laborum corrupti sunt blanditiis quod, magnam tenetur, excepturi omnis iure maxime maiores!",
        image: imageFive
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <motion.section 
        id='ourclasses' 
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        className='bg-gray-20 py-20 px-4 text-primary-100'>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
                className='mx-auto w-5/6 sm:my-5 sm:w-3/5'>

                <div className=' '>
                    <SectionTitle>our classes</SectionTitle>
                    <p className='py-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aperiam dolore autem ipsum eligendi! A delectus maxime officiis esse cum minima corporis assumenda. Hic reprehenderit labore in voluptatem distinctio eum.</p>
                </div>
            </motion.div>


            <div className='mt-10 h-[353px] w-full overflow-y-hidden overflow-x-hidden hover:overflow-y-hidden hover:overflow-x-scroll'>
                <ul className='w-[1900px] sm:w-[2200px] whitespace-nowrap'>
                    {classes.map((item: ClassType, index) => (
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>

            </div>

        </motion.section>
    )
}

export default OurClasses
