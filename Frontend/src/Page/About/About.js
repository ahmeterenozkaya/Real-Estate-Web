import React from 'react'
import { data } from '../../Data/data'
import "./About.css"
function About() {
  return (
    <div className='about'>
      <div className='entrance'>
        <div>
          <h1>{data.evva.about.head.entrance}</h1>
          <p>{data.evva.about.paragraph.entrance}</p>
        </div>
        <img src={data.img.housemodel} alt='house' />
      </div>
      <div className='vision'>
        <img src={data.img.housemodelOne} alt='house' />
        <div>
          <h1>{data.evva.about.head.vision}</h1>
          <p>{data.evva.about.paragraph.vision}</p>
        </div>
      </div>
      <div className='about-services'>
        <img src={data.img.houseTwo} alt='house' />
        <div>
          <h1>{data.evva.about.head.services.head}</h1>
          <div className='services'>
            <h2>{data.evva.about.head.services.easte}</h2>
            <p>{data.evva.about.paragraph.services.easte}</p>
            <h2>{data.evva.about.head.services.entrepreneurship}</h2>
            <p>{data.evva.about.paragraph.services.entrepreneurship}</p>
          </div>
        </div>
      </div>
      <div className='team'>
        <h1>{data.evva.about.team.head}</h1>
        <p>{data.evva.about.team.paragraph}</p>
      </div>
    </div>
  )
}
 
export default About
