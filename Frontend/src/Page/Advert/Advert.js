import React from 'react'
import Arsa from './Arsa/Arsa'
import Ev from './Ev/Ev'
import Bungolov from './Bungolov/Bungolov'

function Advert() {
  return (
    <div className='flex justify-center items-center  gap-12 flex-col'>
      <Arsa />
      <hr />
      <Ev />
      <hr />
      <Bungolov/>
    </div>
  )
}

export default Advert
