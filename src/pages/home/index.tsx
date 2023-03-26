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
      className='bg-primary-200 py-10 px-3 flex flex-col justify-center items-center gap-10 '>

      {/* Image & Main header */}
      <div className='max-w-md flex flex-col items-center '>

        {/* Main header */}
        <div className=' '>

          <div className='flex flex-col text-primary-100 gap-2'>
            <h1 className='text-5xl font-bold' >Olympus Gym</h1>
            <h5 className='text-xl '>military fitness center</h5>
          </div>

          {/* Headings*/}
          <div className='text-primary-100'>
            <p>reach your full physical potential with military workouts for all fitness levels</p>
          </div>
        </div>

        {/* Actions*/}
        <div className='flex items-center gap-3'>
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

        {/* Image*/}
        <div className=''>
          <img className='w-full h-auto' alt='home-page-image' src={HomePageImage} />
        </div>



      </div>



    </section>
  )
}

export default Home