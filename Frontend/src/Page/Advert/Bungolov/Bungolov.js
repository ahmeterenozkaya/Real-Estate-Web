import React from 'react'
import SatilikBungolov from './SatilikBungolov/SatilikBungolov'
import KiralikBungolov from './KiralikBungolov/KiralikBungolov'

function Bungolov() {
  return (
    <div className='pt-96 flex justify-center items-center flex-col text-left w-full'>
      <h1 className='text-7xl '>Bungolov</h1>
      <div className='w-full p-12  '>
        <h1 className='text-6xl mb-[-20rem]'>Satılık</h1>
        <SatilikBungolov />
      </div>
      <div className='w-full p-12'>
        <h1 className='text-6xl mb-[-20rem]'>Kiralık</h1>
        <KiralikBungolov />
      </div>
    </div>
  )
}

export default Bungolov
