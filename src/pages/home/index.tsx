import React from 'react'
import { SelectedPage } from '../../shared/types'
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
      className='bg-gray-20 py-10 px-3 flex flex-col justify-center items-center gap-10 sm:flex-row  sm:gap-0 sm:max-w-3/4'>

      {/* Main header */}
      <div className='flex flex-col sm:flex-row  sm:items-center sm:justify-center  '>

        <div className='flex flex-col gap-7 items-center'>

          <div className='flex flex-col text-center text-primary-100 gap-2'>
            <h1 className='text-4xl font-bold tracking-wider sm:text-5xl sm:tracking-normal ' >Olympus Gym</h1>
            <h5 className='text-2xl tracking-wider sm:text-3xl sm:tracking-wide '>military fitness center</h5>
          </div>


          <div className='flex flex-col gap-7 text-justify max-w-[17rem] sm:max-w-[21rem]'>
            <div className='text-primary-100 text-base tracking-wider'>
              <p>reach your full physical potential with military workouts and classes for all fitness levels</p>
            </div>

            {/* Actions*/}
            <div className='flex items-center gap-7'>
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink
                className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}>
                <p>Learn More</p>
              </AnchorLink>
            </div>
          </div>

        </div>


      </div>

      {/* Main Image */}
      <div className=''>
        <img className='w-full h-full object-cover' alt='home-page-image' src={HomePageImage} />
      </div>



    </section>
  )
}

export default Home



