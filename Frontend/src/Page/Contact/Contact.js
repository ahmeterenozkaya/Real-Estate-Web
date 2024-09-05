import React from 'react'
import FormContact from '../../Components/FormContact/FormContact'
import "../../Data/data"
import "./Contact.css"
import { data } from '../../Data/data'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <div className='contact'>
      <div className='contact-info'>
        <div>
          <span>{data.svg.house}</span>
          <h1>Büyükdere Cad. No. 263
            Balgat, Ankara 34398</h1>
        </div>
        <div className='flex'>
          <span>{data.svg.mail}</span>
          <h1>evva@gmail.com</h1>
        </div>
        <div className='flex'>
          <p>{data.svg.phone} </p>
          <h1>(+90)212 265 75 89</h1>
        </div>
      </div>
      <FormContact />
      <footer className='flex flex-col m-28 justify-start items-start text-red-900 text-6xl font-mono italic gap-3 pt-0 '>
        <Link to={"/"}>Anasayfa</Link>
        <Link to={"/about"}>Hakkımızda</Link>
        <Link to={"/advert"}>İlanlar</Link>
      </footer>
    </div>
  )
}

export default Contact
