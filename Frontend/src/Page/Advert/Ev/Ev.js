import React from 'react'
import KiralikEv from './KiralıkEv/KiralikEv'
import SatilikEv from './SatilikEv/SatilikEv'

function Ev() {
  return (
    <div className='pt-96 flex justify-center items-center flex-col text-left w-full'>
      <h1 className='text-7xl '>Ev</h1>
      <div className='w-full p-12  '>
        <h1 className='text-6xl mb-[-20rem]'>Satılık</h1>
        <SatilikEv />
      </div>
      <div className='w-full p-12'>
        <h1 className='text-6xl mb-[-20rem]'>Kiralık</h1>
        <KiralikEv />
      </div>
    </div>
  )
}

export default Ev
