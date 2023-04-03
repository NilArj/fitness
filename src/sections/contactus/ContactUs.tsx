import React from 'react'
import { SelectedPage } from '../../shared/types'
import { motion } from "framer-motion"
import { useForm } from "react-hook-form";
import SectionTitle from '../../components/SectionTitle'
import contactUsImage from "../../assets/images/trainer_3.jpg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {

  const { register, trigger, formState: { errors } } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (<section
    id='contactus'
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


      {/* Form & Image*/}
      <motion.div
        className="mt-10 text-center sm:mt-0 sm:flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}>

        <form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/example@gmail.comm"
          method="POST"
          className='flex flex-col gap-2 sm:justify-center'
        >
          {/* name input */}
          <input
            type="text"
            placeholder="NAME"
            className='outline-none text-primary-500 sm:text-lg w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white'
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="mt-1 text-primary-500">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" &&
                "Max length is 100 char."}
            </p>
          )}

          {/* email input */}
          <input
            type="text"
            placeholder="EMAIL"
            className='outline-none text-primary-500 sm:text-lg w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white'
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="mt-1 text-primary-500 ">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}

          {/* message input */}
          <textarea
            rows={4}
            cols={50}
            placeholder="MESSAGE"
            className='outline-none text-primary-500 sm:text-lg w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white'
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className="text-primary-500">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" && "Max length is 2000 char."}
            </p>
          )}

          <button
            type="submit"
            className="mt-1 rounded-lg bg-primary-500 text-primary-100 px-20 py-3 transition duration-500 hover:bg-primary-300"
          >
            SUBMIT
          </button>

        </form>
        {/* image */}
        <img className='object-cover mt-10 sm:mt-0 sm:w-1/2 sm:pl-16' src={contactUsImage} />
      </motion.div>

    </motion.div>

  </section>)
}

export default ContactUs