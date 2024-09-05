import React, { useState } from 'react'
import { satilikBungalovFecth, satilikBungalovSil } from '../../../../Data/bungalovApi'
import BungalovCard from '../../../../Components/BungalovItems/BungalovCard'


function SatilikBungolov() {
    const [satilikBungalov, setSatilikBungalov] = useState()
    useState(() => {
        const bungalovFecth = async () => {
            try {
                const fecth = await satilikBungalovFecth()
                setSatilikBungalov(fecth)
            } catch (error) {
                console.log(error)
            }
        }
        bungalovFecth()
    }, [])
    return (
        <div>
            {satilikBungalov && Array.isArray(satilikBungalov) ?
                satilikBungalov.map(item => <BungalovCard
                    deleteCard={satilikBungalovSil}
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
                    link={"/advert/bungalov/satilik/"}
                    key={item.id}
                    id={item.id}
                />)
                : "Loading"
            }
        </div>
    )
}

export default SatilikBungolov
