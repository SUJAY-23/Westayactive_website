import React from 'react';
import './Main.css';
import Header from '../1Navigation/Navigation';
import WSALogo from '../../assets/wsalogo.png';
import NumberCounter from 'number-counter';
import { Link } from "react-scroll"

import { motion } from 'framer-motion'

const Hero = () => {

  const transition = { type: 'sprint', duration: 5 }
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className='hero' id='home'>
      <div className="blur hero-blur"></div>
      <div className='left-h'>
        <Header />
        {/* The Best Ad */}
        <div className='the-best-ad'>
          <motion.div
            initial={{ left: mobile ? '100px' : '155px' }}
            whileInView={{ left: '8px' }}
            transition={transition}
          ></motion.div>
          <samp>The best International Clan</samp>
        </div>

        {/* Hero Heading */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <samp>Game Play</samp>
          </div>
          <div>
            <samp>
              We stay active "Wsa" has many high level "Ch1" & Ch2" clans for top tier game play, we are mainly into pushing, esports, champ cwls, wars, and competitve game play.
            </samp>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={300} start={100} delay='3' preFix='+' /></span>
            <span>Global Players</span>
          </div>
          <div>
            <span>
              <NumberCounter end={10} start={0} delay='3' preFix='+' /></span>
            <span>Clan</span>
          </div>
          <div>
            <span>
              <NumberCounter end={2} start={0} delay='2' preFix='+' /></span>
            <span>E-sports Team</span>
          </div>
        </div>

        {/* hero buttons */}

        <div className="hero-buttons">


          <a style={{ textDecoration: 'none' }} href="https://www.etsy.com/shop/KiyukansCache" target='blank'>
            <button className="btn">WSA Merchant Shop</button>
          </a>

          <Link to='programs'><button className="btn b" style={{ color: 'white', backgroundColor: 'transparent', width: '8rem', height: '3rem', border: '2px solid var(--green)' }} >Explore More</button>
          </Link>


        </div>
      </div>
      {/* right side */}
      <div className='right-h'>
        <a href="https://discord.com/invite/3nxdZeg57m" target = "blank">

          <motion.button

            initial={{ left: mobile ? '50px' : '0px' }}
            whileInView={{ left: '50px' }}
            transition={transition}

            className='btn'>Join Now</motion.button>
        </a>
      </div>
      {/* hero images */}
      <img src={WSALogo} alt="" className='hero-image' />
    </div>
  )
}

export default Hero
