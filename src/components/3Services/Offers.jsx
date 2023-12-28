import React from 'react'
import './Offers.css'
import {programsData} from '../../data/programsData'
// import rightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="Programs" id="programs" style={{margin: '5% 0'}}>
      {/* header */}
      <div className="programs-header">
        <span className='stroke-text'>What </span>
        <span className='stroke-text'>We</span>
        <span className='stroke-text'>Offer</span>
      </div>
      <div className='empty'>hello</div>
      {/* programs */}
      <div className="program-categories">
        {programsData.map((program)=>(
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>

            <div className="join-now">
              <a style={{ textDecoration: 'none' }}
              href="https://discord.com/invite/3nxdZeg57m" target = "blank">
              <samp className='btn'
              style={{ color: 'white', backgroundColor: 'transparent', width: '4rem', height: '1rem', border: '2px solid white' }}
              >Join Now</samp>
              {/* <img src={rightArrow} alt="" /> */}
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs