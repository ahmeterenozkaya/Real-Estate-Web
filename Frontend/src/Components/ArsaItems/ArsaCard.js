import React from 'react'
import { Link } from 'react-router-dom';

function ArsaCard({
  ada,
  fiyati,
  m2,
  no,
  imarli_mi,
  parsel,
  satilik,
  resim,
  id,
  deleteCard,
  link,
  telefon,
  adres,
}) {
  const img = `http://localhost/eren-emlak/Backend/Php/${resim}`;
  const handleDelete = async (id) => {
    try {
      await deleteCard(id)
      window.location.href = "/advert"
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className=' flex justify-center items-center  gap-12 '>
      <img className='w-32 h-32' src={img} alt={resim} />
      <div>
        <label>Fiyati</label>
        <h1>{fiyati}</h1>
      </div>
      <div>
        <label>Ada</label>
        <h1>{ada}</h1>
      </div>
      <div>
        <label>M2</label>
        <h1>{m2}</h1>
      </div>
      <div>
        <label>NO</label>
        <h1>{no}</h1>
      </div>
      <div>
        <label>İmarli Mi</label>
        <h1>{imarli_mi === 1 ? "Evet" : "Hayır"}</h1>
      </div>
      <div>
        <label>Parsel</label>
        <h1>{parsel}</h1>
      </div>
      <div>
        <label>Satilik</label>
        <h1>{satilik ===1?"Evet":"Hayır"}</h1>
      </div>
      <div>
        <label>Telefon</label>
        <h1>{telefon}</h1>
      </div>
      <div>
        <label>Adress</label>
        <h1>{adres}</h1>
      </div>
      <button onClick={() => handleDelete(id)}>Sil</button>
      <Link to={`${link}${id}`}>Edit</Link>
    </div>
  )
}

export default ArsaCard
