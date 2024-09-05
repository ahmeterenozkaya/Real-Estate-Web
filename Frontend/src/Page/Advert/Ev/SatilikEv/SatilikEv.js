import React, { useEffect, useState } from 'react'
import { satilikEvFecth, satilikEvSil } from '../../../../Data/evApi'
import EvCard from '../../../../Components/EvItems/EvCard'


function SatilikEv() {
  const [satilikEv, setSatilikEv] = useState([])
  useEffect(() => {
    const EvFecth = async () => {
      try {
        const req = await satilikEvFecth()
        setSatilikEv(req)
      } catch (error) {
        console.log(error)
      }
    }
    EvFecth()
  }, [])
  return (
    <div className='pt-56'>
      {satilikEv && Array.isArray(satilikEv) ? satilikEv.map(item =>
        <EvCard
          deleteCard={satilikEvSil}
          ilan_no={item.ilan_no}
          ilan_m2={item.ilan_m2}
          oda_sayisi={item.oda_sayisi}
          esyali_mi={item.esyali_mi}
          isinma_tipi={item.isinma_tipi}
          cephe={item.cephe}
          kat={item.kat}
          adress={item.adress}
          banyo_sayisi={item.banyo_sayisi}
          fiyati={item.fiyati}
          telefon={item.telefon}
          satilik_durumu={item.satilik_durumu}
          resim={item.resim}
          link={"/advert/ev/satilik/"}
          key={item.id}
          id={item.id}
        />
      ) : "loading.."
      }
    </div>
  )
}

export default SatilikEv
