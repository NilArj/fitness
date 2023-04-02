import React from 'react'
import { SelectedPage } from '../../shared/types'
import {motion} from "framer-motion"
import SectionTitle from '../../components/SectionTitle'
import contactUsImage from "../../assets/images/trainer_3.jpg"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
  return ( <section 
    id='benefits'
  className='bg-primary-100 py-20 px-4'>

    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
    className='w-5/6 mx-auto flex flex-col items-center'>

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
        <SectionTitle><span className='text-primary-500'>join now</span> to get in shape</SectionTitle>
        <p className='text-justify my-5 text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos possimus vitae quia et earum adipisci nam in quis amet sint dolores fuga expedita veritatis, at nihil! Quas aut alias a.</p>
      </motion.div>

      <motion.div
      className="mt-10 sm:mt-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}>
        <form>

        </form>

        <img className='object-cover sm:1/2' src={contactUsImage}/>
      </motion.div>

    </motion.div>

  </section>)
}

export default ContactUs