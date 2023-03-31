import React from 'react'

type Props = {
  children: React.ReactNode
}

const SectionTitle = ({children}: Props) => {
  return (
    <h1 className='basis-3/5 font-monserrat text-2xl text-center font-bold uppercase sm:text-3xl'>
      {children}
    </h1>
  )
}

export default SectionTitle