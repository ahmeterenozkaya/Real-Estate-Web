import React, { useEffect, useState } from 'react'
import { kiralikEvFecth, kiralikEvSil, satilikEvSil } from '../../../../Data/evApi'
import EvCard from '../../../../Components/EvItems/EvCard'


function KiralikEv() {
  const [kiralik, setKiralik] = useState()
  useEffect(() => {
    const kiralikApi = async () => {
      try {
        const db = await kiralikEvFecth()
        setKiralik(db)
      } catch (error) {
        console.log(error)
      }
    }
    kiralikApi()
  }, [])
  return (
    <div>
      {kiralik && Array.isArray(kiralik) ? kiralik.map(item => <EvCard
        key={item.id}
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
        deleteCard={kiralikEvSil}
        link={"/advert/ev/kiralik/"}
        id={item.id}
      />) : "Loading"

      }
    </div>
  )
}

export default KiralikEv
