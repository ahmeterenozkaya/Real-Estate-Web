import React, { useEffect, useState } from 'react'
import { satilikArsaFecth, satilikArsaSil } from '../../../../Data/arsaApi'
import ArsaCard from '../../../../Components/ArsaItems/ArsaCard'

function SatilikArsa() {
  const [satilik, setSatilik] = useState([])
  useEffect(() => {
    const satilikArsa = async () => {
      try {
        const db = await satilikArsaFecth()
        setSatilik(db)
      } catch (error) {
        console.log(error)
      }
    }
    satilikArsa()

  }, [])

  return (
    <div>
      {satilik && Array.isArray(satilik) ? satilik?.map(s => <ArsaCard key={s.id}
        deleteCard={satilikArsaSil}
        ada={s.ada}
        fiyati={s.fiyati}
        m2={s.ilan_m2}
        no={s.ilan_no}
        imarli_mi={s.imarli_mi}
        parsel={s.parsel}
        satilik={s.satilik_durumu}
        resim={s.resim}
        id={s.id}
        go={'advert'}
        link={`/advert/arsa/satilik/`}
      />
      ) : <div className='flex justify-center items-center'> Loading. ...</div>
      }
    </div>
  )
}

export default SatilikArsa
