import React from 'react'

const Footer = ( ) => {
  return (
    <footer className='bg-gray-20 w-full py-20 flex justify-center text-primary-100'>

        <div className='w-5/6 gap-8 flex flex-col sm:flex-row justify-center'>

            {/* company name */}
        <div className='flex flex-col gap-4 basis-1/2'>
        <h4 className='text-lg sm:text-xl font-bold' >Olympus Gym</h4>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit quia nostrum corporis. Doloribus, expedita et. Architecto sequi perspiciatis quo alias, cupiditate dolorum totam ex at quod voluptas sit? Quia.</p>
        <p> © Olympus Gym All Rights Reserved</p>
        </div>

        {/* links */}
        <div className='flex flex-col gap-4 basis-1/4'>
            <h4 className='text-lg sm:text-xl font-bold'>Links</h4>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Sed et lacus id ante lacinia ornare</p>
            <p>Ut dapibus lacus ut sodales tincidunt</p>
        </div>

        {/* contact us */}
        <div className='flex flex-col gap-4 basis-1/4'>
            <h4 className='text-lg sm:text-xl font-bold'> Contact Us</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>(333)123-4567 </p>
        </div>

        </div>

        

    </footer>
  )
}

export default Footer