import React, { useState } from 'react'
//? import Signin from './Signin/Signin'
import "./admin.css"
import Signin from './Signin/Signin'
import { Auth } from '../../Hook/AuthHook'
import ArsaAdd from '../../Components/ArsaItems/ArsaAdd'
import { kiralikArsaPost, satilikArsaPost } from '../../Data/arsaApi'
import EvAdd from '../../Components/EvItems/EvAdd'
import BungalovAdd from '../../Components/BungalovItems/BungalovAdd'
import TogleButton from '../../Components/TogleButton/TogleButton'


function Admin() {
  const { login, outLogin, onLogin } = Auth()
  const [getActiveAdd, setActiveAdd] = useState({
    arsa: false,
    ev: false,
    bungalov: false
  })
  const [getActive, setActive] = useState(false)
  const activeArsa = (e, item, setItem) => {
    const isActive = !item
    e.preventDefault()
    console.log(item)
    setItem({ arsa: isActive })
  }
  const activeEv = (e, item, setItem) => {
    const isActive = !item
    e.preventDefault()
    setItem({ ev: isActive })
  }
  const activeBungalov = (e, item, setItem) => {
    const isActive = !item
    e.preventDefault()
    setItem({ bungalov: isActive })
  }
  console.log(getActive)
  return (
    <div className='admin'>
      {login === true ? <div >
        <div className='flex  '>
          <div className='flex flex-col'>
            <button className='m-5 h-max  w-56  bg-red-900 text-white font-sans italic text-3xl p-3 rounded-3xl ' onClick={(e) => activeArsa(e, getActiveAdd.arsa, setActiveAdd)}>Arsa Ekle</button>
            <button className='m-5 h-max w-56  bg-red-900 text-white font-sans italic text-3xl p-3 rounded-3xl' onClick={(e) => activeEv(e, getActiveAdd.ev, setActiveAdd)}>Ev Ekle</button>
            <button className='m-5 h-max w-56  bg-red-900 text-white font-sans italic text-3xl p-3 rounded-3xl' onClick={(e) => activeBungalov(e, getActiveAdd.bungalov, setActiveAdd)}>Bungalov Ekle</button>
            <button className="m-5 w-56 rounded-3xl bg-red-900 text-white font-sans italic text-3xl p-5 " onClick={outLogin}>Çıkış</button>
          </div>
          {getActiveAdd.arsa === true && <div className={`${getActive === true ? 'kiralik' : 'satilik'} rounded-3xl`}>
            <div className='setButton '>
              <TogleButton isChecked={getActive} setIsChecked={setActive} />
            </div>
            {getActive === true ? <div className='arsa-add'>
              <ArsaAdd fecth={kiralikArsaPost} />
            </div> :
              <div className='arsa-add'>
                <ArsaAdd fecth={satilikArsaPost} />
              </div>}
          </div>}
          {getActiveAdd.ev === true && <div className={`${getActive === true ? 'kiralik' : 'satilik'} rounded-3xl`}>
            <div className='setButton '>
              <TogleButton isChecked={getActive} setIsChecked={setActive} />
            </div>
            {getActive === true ? <div className='arsa-add'>
              <EvAdd fecth={kiralikArsaPost} />
            </div> :
              <div className='arsa-add'>
                <EvAdd fecth={satilikArsaPost} />
              </div>}
          </div>}
          {getActiveAdd.bungalov === true && <div className={`${getActive === true ? 'kiralik' : 'satilik'} rounded-3xl`}>
            <div className='setButton '>
              <TogleButton isChecked={getActive} setIsChecked={setActive} />
            </div>
            {getActive === true ? <div className='arsa-add'>
              <BungalovAdd fecth={kiralikArsaPost} />
            </div> :
              <div className='arsa-add'>
                <BungalovAdd fecth={satilikArsaPost} />
              </div>}
          </div>}

        </div>

      </div> : <Signin login={onLogin} />
      }
    </div>
  )
}

export default Admin
