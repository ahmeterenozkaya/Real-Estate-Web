import React, { useEffect, useState } from 'react'
import ArsaCard from '../../../../Components/ArsaItems/ArsaCard'
import { kiralikArsaFecth, kiralıkArsaSil } from '../../../../Data/arsaApi'

function KiralıkArsa() {
  const [kiralik, setKiralik] = useState([])
  useEffect(() => {
    const kiralikArsa = async () => {
      try {
        const db = await kiralikArsaFecth()
        setKiralik(db)
      } catch (error) {
        console.log(error)
      }
    }
    kiralikArsa()

  }, [])

  return (
    <div className='pt-56'>
      {kiralik && Array.isArray(kiralik) ? kiralik?.map(k => <ArsaCard key={k.id}
        deleteCard={kiralıkArsaSil}
        ada={k.ada}
        fiyati={k.fiyati}
        m2={k.ilan_m2}
        no={k.ilan_no}
        imarli_mi={k.imarli_mi}
        parsel={k.parsel}
        satilik={k.satilik_durumu}
        resim={k.resim}
        telefon={k.telefon}
        adres={k.adress}
        id={k.id}
        go={'advert'}
        link={`/advert/arsa/kiralik/`}
      />
      ) : <div className='flex justify-center items-center'> Loading. ...</div>
      }


    </div >
  )
}

export default KiralıkArsa
