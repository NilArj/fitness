import React from 'react'
import { SelectedPage, BenefitType } from '../../shared/types'
import { HomeModernIcon, UserGroupIcon,AcademicCapIcon } from '@heroicons/react/24/solid'
import {motion} from "framer-motion"
import SectionTitle from '../../components/SectionTitle'
import Benefit from '../../components/Benefit'

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

const benefitContainer = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <motion.div
            id='benefits'
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            className='bg-primary-100 py-12 px-3 flex flex-col justify-center items-center'>


            {/* Main header & description */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 }
            }}
            className='max-w-xl'>
                <SectionTitle>more than just a gym</SectionTitle>
                <p className='text-justify my-5 text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos possimus vitae quia et earum adipisci nam in quis amet sint dolores fuga expedita veritatis, at nihil! Quas aut alias a.</p>
            </motion.div>


            {/* Benefits */}
            <motion.div
            className='items-center justify-between gap-7 mt-5 sm:flex '>
                {benefits.map((benefit: BenefitType)=> (
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

            
        </motion.div>
    )
}

export default Benefits