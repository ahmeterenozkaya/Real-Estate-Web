import React from 'react'
import { Link } from 'react-router-dom';

function EvCard({
    ilan_no,
    ilan_m2,
    oda_sayisi,
    esyali_mi,
    isinma_tipi,
    cephe,
    kat,
    adress,
    banyo_sayisi,
    fiyati,
    telefon,
    satilik_durumu,
    resim,
    id,
    deleteCard,
    link,
}) {
    const img = `http://localhost/eren-emlak/Backend/Php/${resim}`;
    console.log(id)
    const handleDelete = async (id) => {
        try {
            await deleteCard(id)
            window.location.href = "/advert"
        } catch (error) {
        }
    }
    return (
        <div className=' flex justify-center items-center  gap-12 flex-wrap p-12 '>
            <img className='w-32 h-32' src={img} alt={resim} />
            <div>
                <label>Fiyati</label>
                <h1>{fiyati}</h1>
            </div>
            <div>
                <label>Ada</label>
                <h1>{ilan_no}</h1>
            </div>
            <div>
                <label>M2</label>
                <h1>{ilan_m2}</h1>
            </div>
            <div>
                <label>oda_sayisi</label>
                <h1>{oda_sayisi}</h1>
            </div>
            <div>
                <label>Esyali_mi Mi</label>
                <h1>{esyali_mi}</h1>
            </div>
            <div>
                <label>isinma_tipi</label>
                <h1>{isinma_tipi}</h1>
            </div>
            <div>
                <label>cephe</label>
                <h1>{cephe}</h1>
            </div>
            <div>
                <label>Telefon</label>
                <h1>{telefon}</h1>
            </div>
            <div>
                <label>Adress</label>
                <h1>{adress}</h1>
            </div>
            <div>
                <label>kat</label>
                <h1>{kat}</h1>
            </div>
            <div>
                <label>banyo_sayisi</label>
                <h1>{banyo_sayisi}</h1>
            </div>
            <div>
                <label>satilik_durumu</label>
                <h1>{satilik_durumu}</h1>
            </div>
            <button onClick={() => handleDelete(id)}>Sil</button>
            <Link to={`${link}${id}`}>Edit</Link>
        </div>
    )
}

export default EvCard
