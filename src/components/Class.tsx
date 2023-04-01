import React from 'react'

type Props = {
    name: string;
    description?: string;
    image: string;
}

const Class = ({ name, description, image }: Props) => {
    return (
        <li className='relative mx-5 inline-block w-[350px] sm:w-[450px] h-[353px]'>
            <div className='p-5 absolute z-20 flex w-[350px] sm:w-[450px] h-[353px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-gray-50 opacity-0 transition duration-500 hover:opacity-90 '>
                <p className='text-2xl'>{name}</p>
                <p className='mt-5'>{description}</p>
            </div>
            <img alt={`${image} picture`} src={image} className='object-cover h-full w-full'/>

        </li>

    )
}

export default Class