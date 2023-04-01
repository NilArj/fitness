import React from 'react'
import { SelectedPage, BenefitType } from '../../shared/types'
import { HomeModernIcon, UserGroupIcon,AcademicCapIcon } from '@heroicons/react/24/solid'
import {motion} from "framer-motion"
import SectionTitle from '../../components/SectionTitle'
import Benefit from '../../components/Benefit'
import benefitImage from "../../assets/images/smiling.png"
import ActionButton from '../../shared/ActionButton'

const benefits:Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h6 w-6'/>,
        title: "State of Art Facilities",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ratione laudantium reiciendis, quam iste sint deserunt quae, quod aperiam quaerat hic temporibus veniam consequatur eaque eum explicabo, atque illo in."
    },
    {
        icon: <UserGroupIcon className='h6 w-6'/>,
        title: "Diverse Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ratione laudantium reiciendis, quam iste sint deserunt quae, quod aperiam quaerat hic temporibus veniam consequatur eaque eum explicabo, atque illo in."
    },
    {
        icon: <AcademicCapIcon className='h6 w-6'/>,
        title: "Certified Trainers",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ratione laudantium reiciendis, quam iste sint deserunt quae, quod aperiam quaerat hic temporibus veniam consequatur eaque eum explicabo, atque illo in."
    },

]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id='benefits'
            className='bg-primary-100 min-h-full py-20 px-4'>

            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
                className='w-5/6 mx-auto flex flex-col items-center'
            >
                {/* Main header & description */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className='max-w-xl'>
                    <SectionTitle>more than just a gym</SectionTitle>
                    <p className='text-justify my-5 text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos possimus vitae quia et earum adipisci nam in quis amet sint dolores fuga expedita veritatis, at nihil! Quas aut alias a.</p>
                </motion.div>


                {/* Benefits */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}
                    className='items-center justify-between gap-7 mt-5 sm:flex '>
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* Image & full description */}
                <div className='mt-16 items-center justify-between flex flex-col gap-20 sm:gap-0 sm:flex-row'>
                    
                    {/* Image */}
                    <img className='object-cover sm:w-1/2' src={benefitImage} />

                    {/* Full description */}
                    <motion.div 
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ duration: 0.5 }}
                     variants={{
                         hidden: { opacity: 0, x: -100 },
                         visible: { opacity: 1, x: 0 },
                     }}
                    className='sm:w-2/3 sm:pl-16'>
                        <SectionTitle>members getting <span className='text-primary-500'>strong</span></SectionTitle>
                        <div>
                            <p className='my-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis, provident quod expedita officia corporis iure placeat fugiat dolore. Dicta, rem. Recusandae ipsum sint, nemo numquam necessitatibus dolores porro quo.</p>
                            <p className='mb-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sed excepturi quam aliquam et distinctio aliquid necessitatibus quae tempore tempora commodi placeat sit harum consequatur dolorem a asperiores recusandae officia.</p>
                        </div>
                        <div className='text-center mt-7'>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>

                    </motion.div>
                </div>

            </motion.div>
        </section>
    )
}

export default Benefits