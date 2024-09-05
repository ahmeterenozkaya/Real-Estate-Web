import React from 'react'
import SatilikArsa from './SatilikArsa/SatilikArsa'
import KiralıkArsa from './KiralıkArsa/KiralıkArsa'
function Arsa() {

  return (
    <div className='pt-96 flex justify-center items-center flex-col text-left w-full'>
      <h1 className='text-7xl '>Arsa</h1>
      <div className='w-full p-12  '>
        <h1 className='text-6xl mb-[-20rem]'>Satılık</h1>
        <SatilikArsa />
      </div>
      <div className='w-full p-12'>
        <h1 className='text-6xl mb-[-20rem]'>Kiralık</h1>
        <KiralıkArsa />
      </div>
    </div>
  )
}

export default Arsa
