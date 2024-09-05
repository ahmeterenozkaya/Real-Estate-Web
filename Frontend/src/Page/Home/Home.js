import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
function Home() {

  return (
    <div className='home'>
      <div>
        <h1>Evve Ticari</h1>
        <h3>Yatırım ve Proje Geliştirme</h3>
      </div>
      <div className='flex justify-around w-full '>
        <Link to={"/advert"}>
          <button>İlanlar</button>
        </Link>
        <Link to={"/about"}>
          <button>Hakkımızda</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
