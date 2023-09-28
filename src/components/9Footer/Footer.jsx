import React from 'react'
import './Footer.css'

import Discord from '../../assets/discord.png'
import Twitter from '../../assets/twitter.png'
import Instagram from '../../assets/instagram.png'

const Footer = () => {
  return (
    <div className='Footer-container' id='contact'>
      <hr />
      <div className="social">
        <p>Connect with us through: </p>
      </div>
      <div className="footer">
        <div className="social-links">
          <a style={{ textDecoration: 'none' }} href="https://discord.gg/wsa" target='blank'>
            <img src={Discord} alt="" />
          </a>
          <a style={{ textDecoration: 'none' }} href="https://twitter.com/we_stay_active?" target='blank'>
            <img src={Twitter} alt="" />
          </a>
          <a style={{ textDecoration: 'none' }} href="https://instagram.com/wsa_clashofclans?=" target='blank'>
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>WSA | All rights Reserved </p>

        <div>
          <a style={{textDecoration: 'none', fontStyle: 'oblique'}} href="https://sujay-23.github.io/Portfolio/" target='blank'>
            <p className="createdby" style={{color: '#7b9d7f', }}>Created by SKB</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer