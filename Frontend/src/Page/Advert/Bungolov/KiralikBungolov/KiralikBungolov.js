import React, { useState } from 'react'
import { kiralikBungalovFecth, kiralikBungalovSil } from '../../../../Data/bungalovApi'
import BungalovCard from '../../../../Components/BungalovItems/BungalovCard'


function KiralikBungolov() {
  const [kiralikBungalov, setKiralikBungalov] = useState()
  useState(() => {
    const bungalovFecth = async () => {
      try {
        const fecth = await kiralikBungalovFecth()
        setKiralikBungalov(fecth)
      } catch (error) {
        console.log(error)
      }
    }
    bungalovFecth()
  }, [])
  return (
    <div>
      {kiralikBungalov && Array.isArray(kiralikBungalov) ? kiralikBungalov.map(item =><BungalovCard
          deleteCard={kiralikBungalovSil}
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
          link={"/advert/bungalov/kiralik/"}
          key={item.id}
          id={item.id}
        />
      ) : "Loadindg..."

      }
    </div>
  )
}

export default KiralikBungolov
